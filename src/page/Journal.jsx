import React from 'react'
import Container from '../component/Container'

const Journal = () => {
  console.log(window.localStorage);
  
  localStorage.setItem("name","tamim")
  let data=localStorage.getItem("name")

  console.log(data);
  localStorage.removeItem("name")
  localStorage.setItem("massege","lizon")
  let dat2=localStorage.getItem("massege")
  console.log(dat2);
  localStorage.removeItem("massege")
  sessionStorage.setItem("value","sajib")
  let data3=sessionStorage.getItem("value")
  console.log(data3);
  sessionStorage.removeItem("value")
  let arr=["sajib","tamim","lizon"]
  localStorage.setItem("information",JSON.stringify(arr))
  let data4=JSON.parse(localStorage.getItem("information"))
  console.log(data4);
  
  return (
    <div>
      <Container>
        
        <h1>{data}</h1>
        
      </Container>
    </div>
  )
}

export default Journal