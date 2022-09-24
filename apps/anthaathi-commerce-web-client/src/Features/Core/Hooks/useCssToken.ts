function CSSTokenProvider() {
  return;
}

export function useCssToken() {
  return (token: string, defaultValue: string | number = null) => {
    return `var(--${token}` + (defaultValue ? `, ${defaultValue}` : '') + ')';
  };
}
