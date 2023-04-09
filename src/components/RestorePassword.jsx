import { useSearchParams } from "react-router-dom";
import { Formik } from "formik";

import Card from "~/components/card/Card";
import List from "~/components/list/List";
import Button from "~/components/button/Button";
import RusMaskInput from "~/components/rus-mask-input/RusMaskInput";

export default function RestorePassword({ onSetPhone }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const removeQueryTitle = () => {
    setSearchParams(searchParams.delete("title"));
  };
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
      onSubmit={(values, actions) => {
        onSetPhone(values.phone);
        removeQueryTitle();
        actions.resetForm();
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
                  removeQueryTitle();
                  resetForm();
                }}
                className="button-link"
                type="button"
                style={{
                  marginTop: "10px",
                  marginLeft: "auto",
                  display: "flex",
                }}
              />
              <Button label="позвонить" style={{ marginTop: "42px" }} />
            </form>
          </Card>
        );
      }}
    </Formik>
  );
}
