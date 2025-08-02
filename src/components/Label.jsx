function Label({text, bg}){
  return (
    <div className={`text-white bg-${bg} rounded-lg px-4 py-2 inline-block`}>
      {text}
    </div>
  )
}

export default Label