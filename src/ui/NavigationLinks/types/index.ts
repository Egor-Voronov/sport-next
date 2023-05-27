export interface INavigationLinksProps {
  links: { link: string; label: string }[];
  onClose?: () => void;
}
