export function Icon({ icon }: { icon: string }) {
  return <span className={`fa fa-${icon}`} aria-hidden="true" />;
}
