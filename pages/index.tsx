import dynamic from "next/dynamic";

const Dynamic = dynamic(
  async function () {
    return Wrapper
  }
)

const Wrapper = () => {
  return <div>
    <button onClick={() => alert('good morning')}>Hello</button>
  </div>
}

export default function Page() {
  return <Dynamic />
}
