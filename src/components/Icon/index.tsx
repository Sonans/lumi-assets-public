import { ReactComponent as Info } from './assets/info.svg';

type Icon =
  | 'check'
  | 'arrow-thin-left'
  | 'arrow-thin-right'
  | 'arrow-full-left'
  | 'arrow-full-right'
  | 'close-icon'
  | 'help'
  | 'logo'
  | 'oral-exam'
  | 'oral-lab-exam'
  | 'plus-bubble'
  | 'save'
  | 'symbol'
  | 'written-exam'
  | 'campus'
  | 'online'
  | 'live'
  | 'clock'
  | 'sun'
  | 'moon'
  | 'warning'
  | 'warning-outline'
  | 'downpayment'
  | 'loan'
  | 'info';

interface Props extends React.HTMLAttributes<SVGSVGElement> {
  type: Icon;
  className?: string;
}

export function Icon({ type = 'info', className = 'w-4', ...props }: Props) {
  if (type === 'info') return <Info className={className} {...props} />;
  return null;
}
