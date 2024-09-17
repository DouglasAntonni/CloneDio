import { useState, /*useEffect useMemo*/ useCallback } from 'react'

const Teste = () => {
    const [name, setName] = useState('Douglas');
    const [age, setAge] = useState(39);
    
    const handleChangeName = useCallback(() => {
        setName(prev => prev === 'Douglas' ? 'Veríssimo' : 'Douglas')
    }, [])
    
    const handleChangeAge = useCallback(() => {
        const newAge = 10 * age;
        console.log('age atuel', age, newAge)
        setAge(prev => prev === 39 ? 26 : 39)
    }, [age])

    //useMemo = referencia em variavies(const, var e let)
    //useCallBack = referencia de função

  return (
    <div>
        <p>
            Nome: {name}
            <br />
            Idade: {age}
            <br />
        </p>
        <button onClick={handleChangeName}>Alterar Nome</button>
        <br />
        <button onClick={handleChangeAge}>Alterar Idade</button>    
    </div>
  )
}
export {Teste};