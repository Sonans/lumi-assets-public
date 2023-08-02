import { classes } from '../utils/helpers';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'primary' | 'secondary' | 'tertiary';
}

export function Message({ mode = 'primary' }: Props) {
  const modeClasses = {
    primary: 'bg-primary bg-primary/50 border-primary',
    secondary: 'bg-secondary bg-secondary/50 border-secondary',
    tertiary: 'bg-tertiary bg-tertiary/50 border-tertiary',
  };

  return (
    <div className={classes('border-4 flex justify-center p-4 cursor-pointer w-full', modeClasses[mode])}>
      <div>Hello World!</div>
      <svg className='w-4 ml-auto' id='Layer_2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.69 26.69'>
        <defs>
          <style>{`.info-cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}`}</style>
        </defs>
        <g id='icons'>
          <g>
            <g>
              <path
                className='info-cls-1'
                d='M25.69,13.35c0,6.82-5.52,12.35-12.34,12.35S1,20.16,1,13.35,6.53,1,13.35,1s12.34,5.53,12.34,12.35Z'
              />
              <line className='info-cls-1' x1='13.34' y1='18.32' x2='13.34' y2='13.01' />
              <line className='info-cls-1' x1='13.35' y1='8.37' x2='13.35' y2='8.37' />
            </g>
            <path d='M14.44,8.37c0,.6-.49,1.1-1.1,1.1s-1.1-.49-1.1-1.1,.49-1.1,1.1-1.1,1.1,.49,1.1,1.1Z' />
          </g>
        </g>
      </svg>
    </div>
  );
}
