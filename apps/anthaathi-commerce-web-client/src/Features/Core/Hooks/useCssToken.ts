function CSSTokenProvider() {
  return;
}

export function useCssToken() {
  return (token: string, defaultValue?: string | number) => {
    return `var(--${token}` + (defaultValue ? `, ${defaultValue}` : '') + ')';
  };
}
