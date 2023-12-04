import planeIcon from './assets/plane.svg'

function ContactButton() {
  return <button className="flex gap-0.5 pr-0 pl-3.5 py-1.5 bg-transparent border-0">
    <div className='text-blue-700 text-base font-medium'>Get in touch</div>
    <img src={planeIcon}></img>
    </button>;
}

export default ContactButton;
