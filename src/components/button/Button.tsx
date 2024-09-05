import { FaTelegram } from "react-icons/fa";

const Button = () => {
    return (
        <button className="px-4 py-2 border border-yellow-400 rounded-3xl flex items-center gap-2">
            <span className="text-yellow-400 uppercase font-rowdies">Acesse meu grupo</span>
            <FaTelegram className="text-yellow-400"/>
        </button>
    )
}

export default Button;