function Label({text, bg}){
  return (
    <div className={`text-white bg-${bg} rounded-lg px-10 py-1 inline-block`}>
      {text}
    </div>
  )
}

export default Label