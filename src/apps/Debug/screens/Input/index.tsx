import React, { memo, useState } from "react";
import { Screen, TextInput, Button } from "../../../../components";
import { useNav } from "../../../../hooks";

export default memo(function DebugInput() {
  const nav = useNav();

  const [form, setForm] = useState({
    email: "",
    error: "",
    name: "",
    password: ""
  });

  const handleChange = (key: string) => (val: string) => {
    setForm(prev => ({ ...prev, [key]: val }));
  };

  const handleSubmit = () => {
    setForm(prev => ({ ...prev, error: "Invalid Email" }));
  };

  return (
    <Screen onLeftPress={nav.to("debug")} title="Template" gutter>
      <TextInput
        title="Name"
        placeholder="jane doe"
        optional
        value={form.name}
        onChangeText={handleChange("name")}
        error={form.error}
      />
      <TextInput
        title="Email"
        value={form.email}
        onChangeText={handleChange("email")}
        keyboardType="email-address"
        textContentType="username"
        placeholder="example@gmail.com"
        error={form.error}
      />
      <TextInput
        textContentType="password"
        value={form.password}
        onChangeText={handleChange("password")}
        title="Password"
        placeholder="•••••••"
        secureTextEntry
      />
      <Button title="complete form" onPress={handleSubmit} />
    </Screen>
  );
});
