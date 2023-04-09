import { Formik } from "formik";
import { useSearchParams } from "react-router-dom";

import Card from "~/components/card/Card";
import List from "~/components/list/List";
import Input from "~/components/input/Input";
import Button from "~/components/button/Button";
import RusMaskInput from "~/components/rus-mask-input/RusMaskInput";

import { useEffect } from "react";

export default function LoginForm({ phone, onSetPhone }) {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (phone) {
      localStorage.setItem("check-number", phone);
    }
  }, [phone]);
  return (
    <Formik
      initialValues={{ login: phone, password: "" }}
      validate={({ login, password }) => {
        const errors = {};

        if (!login) errors.login = "Введите логин";
        else if (login.length !== 11) {
          errors.login = "Логин должен быть из 11 цифр";
        } else if (
          login !== (localStorage.getItem("check-number") || "71111111111")
        ) {
          errors.group = "Неверный логин или пароль";
        }

        if (!password) errors.password = "Введите пароль";
        else if (password.length !== 6) {
          errors.password = "Пароль должен быть из 6 символов";
        } else if (password !== "123456") {
          errors.group = "Неверный логин или пароль";
        }

        if (errors.login || errors.password) {
          delete errors.group;
        }

        return errors;
      }}
      validateOnChange={false}
      validateOnBlur={false}
      enableReinitialize={true}
      onSubmit={() => {
        setSearchParams({ title: "logout" });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        setFieldValue,
        setFieldTouched,
        resetForm,
      }) => {
        return (
          <Card>
            <form onSubmit={handleSubmit}>
              <List>
                <RusMaskInput
                  title="Введите логин"
                  onChange={(value) => {
                    setFieldValue("login", value);
                    setFieldTouched("login", false, false);
                  }}
                  value={values.login}
                  error={touched.login && errors.login}
                />
                <Input
                  title="Введите пароль"
                  onChange={(value) => {
                    setFieldValue("password", value);
                    setFieldTouched("password", false, false);
                  }}
                  value={values.password}
                  error={touched.password && errors.password}
                  type="password"
                />
              </List>

              <Button
                label="Забыли пароль?"
                onClick={() => {
                  setSearchParams({ title: "restore-password" });
                  resetForm({
                    values: {
                      login: "",
                      password: "",
                    },
                  });
                  onSetPhone("");
                }}
                type="button"
                className="button-link"
                style={{
                  display: "flex",
                  marginTop: "10px",
                  marginLeft: "auto",
                }}
              />

              <Button label="войти" style={{ marginTop: "42px" }} />
              {errors.group && (
                <div
                  style={{
                    fontSize: "14px",
                    color: "tomato",
                    textAlign: "center",
                  }}
                >
                  {errors.group}
                </div>
              )}
            </form>
          </Card>
        );
      }}
    </Formik>
  );
}
