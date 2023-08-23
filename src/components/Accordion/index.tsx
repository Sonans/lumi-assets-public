import { AccordionItem, AccordionItemProps } from './AccordionItem';

interface AccordionProps {
  data: AccordionItemProps[];
  titleBackgroundColor?: 'white' | 'primary';
  contentBackgroundColor?: 'white' | 'primary';
}

export function Accordion({ data, contentBackgroundColor = 'white', titleBackgroundColor = 'white' }: AccordionProps) {
  return (
    <div className='w-full'>
      {data.map((item, index) => (
        <AccordionItem
          contentBackgroundColor={contentBackgroundColor}
          titleBackgroundColor={titleBackgroundColor}
          key={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}
