//человек должен создать пароль для карты из 4 или 6 цифр

function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6) {
    const p = pin.replace(/\D|-|\./g, "");
    return (p.length === pin.length) & (p.length === 4) || p.length === 6
      ? true
      : false;
  } else {
    return false;
  }
}
