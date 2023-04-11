import { useSearchParams } from "react-router-dom";
import { Formik } from "formik";

import Card from "~/components/card/Card";
import List from "~/components/list/List";
import Button from "~/components/button/Button";
import RusMaskInput from "~/components/rus-mask-input/RusMaskInput";
import { useState } from "react";

export default function RestorePassword({ onSetPhone }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{ phone: "" }}
      validate={({ phone }) => {
        const errors = {};
        if (!phone) errors.phone = "Введите номер телефона";
        else if (phone.length !== 11) {
          errors.phone = "Номер телефона должен быть из 11 цифр";
        }

        return errors;
      }}
      onSubmit={(values) => {
        onSetPhone(values.phone);
        setIsShowPassword(true);
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
          <Card title="Восстановление пароля">
            <form onSubmit={handleSubmit}>
              <List>
                <RusMaskInput
                  title="Введите номер телефона"
                  onChange={(value) => {
                    setIsShowPassword(false);
                    setFieldValue("phone", value);
                    setFieldTouched("phone", false, false);
                  }}
                  value={values.phone}
                  error={errors.phone && touched.phone && errors.phone}
                />
              </List>

              <Button
                label="назад"
                onClick={() => {
                  setSearchParams(searchParams.delete("title"));
                  resetForm();
                  setIsShowPassword(false);
                }}
                className="button-link"
                type="button"
                style={{
                  marginTop: "10px",
                  marginLeft: "auto",
                  display: "flex",
                }}
              />

              {isShowPassword && <div>Пароль: 123456</div>}
              <Button label="позвонить" style={{ marginTop: "42px" }} />
            </form>
          </Card>
        );
      }}
    </Formik>
  );
}
