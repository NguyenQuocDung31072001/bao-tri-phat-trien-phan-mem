import React from 'react'

interface IPropsRadioButton {
  id: string
  title: string
  radioClassName?: string
  titleClassName?: string
}
export default function RadioButton({
  id,
  title,
  radioClassName = 'flex items-center py-[1px]',
  titleClassName = 'text-[12px] font-normal text-black/80 ml-2'
}: IPropsRadioButton) {
  const [checked, setChecked] = React.useState<boolean>(false)
  return (
    <div className={radioClassName} onClick={() => setChecked(!checked)}>
      <input id={id} type='radio' checked={checked} onChange={() => {}} />

      <p className={titleClassName}>{title}</p>
    </div>
  )
}
