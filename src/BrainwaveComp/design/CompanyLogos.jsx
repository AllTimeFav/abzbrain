import { companyLogos } from "../../constants"


const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className}`}>
        <h5 className="tagline text-center text-n-1/50">Company Logos</h5>
        <ul className="flex">
            {companyLogos.map((item, index) => (
                <li className="flex items-center justify-center flex-1 h-[8.5rem]" key={index}>
                    <img src={item} alt="logo" width={134} height={28} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default CompanyLogos