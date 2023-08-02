interface Step {
  title: string;
  url: string;
}

interface Props {
  steps: Step[];
  onClick: (step: Step, index: number) => void;
}

export function StepNavigation({ steps, onClick }: Props) {
  return (
    <nav className="w-full">
      <ul className='flex justify-between'>
        {steps.map((step, index) => (
          <li
          className="w-full"
            onClick={() => {
              onClick(step, index);
            }}
            role='link'>
            <div className="flex items-center w-full">
              <div className='border-2 rounded-full border-primary w-16 h-16 flex items-center justify-center'>
                {index + 1}
              </div>
              {index < steps.length - 1 && <div className="h-2 bg-primary ">lol</div>}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
