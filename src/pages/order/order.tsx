import { useState } from "react";
import { axiosInstance } from "../../libs/init-interceptor";

function Order() {
  const [countX, setCountX] = useState(0);
  const [countY, setCountY] = useState(0);
  const [user, setUser] = useState<any>('')


  async function fetchData() {
    const data = await axiosInstance.get('/todos12312', {
      showLoader: true,
    } as any);
    console.log('data: ', data)
  }
  
  return (
    <div>
      {user}
      {countX} <br />
      {countY} <br />
      <button onClick={() => {
        setCountX(countX + 1);
        setCountY(countY + 1);
      }}>Test automatic batching</button>

      <button onClick={() => setUser({})}>test error boundary</button>

      <button onClick={fetchData}>Test axios interceptor</button>


    </div>
  )
}

export default Order