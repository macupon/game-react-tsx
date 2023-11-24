import './Level.css';


interface LevelProps {
  level: number
}

export const Level = (props: LevelProps) => {


  return (
    <div>
        <button className='btn-level'>{'🌶️'.repeat(props.level)}</button>
    </div>
  )
}
