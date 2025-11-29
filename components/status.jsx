import { use, useState } from "react"

export default function Status() {
  const [isRed, setIsRed] = useState(false);

  return (
    <button
      onClick={() => setIsRed(!isRed)}
      className={isRed ? 'btn-red' : 'btn-green'}
    >
      {isRed ? "Status" : "Done"}
    </button>
  );
}

// import { use, useState } from "react"

// export default function Status() {
//     let [Text, setText] = useState('Status')
//     let [bgColor, setBgColor] = useState('red')
    
//     let status = () => {
//         setText('Done')
//         setBgColor('green')
//     }

//     return (
//         <button className="Status" 
//         style={{background: bgColor}}
//         onClick={status}>{Text}</button>
//     )
// }