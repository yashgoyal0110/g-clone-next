'use client'
import { MdOutlineFileUpload } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { useRouter } from "next/navigation";
import './ResultPage.css'

function ResultPageHeader() {
  const router = useRouter();
  return (
     <div className="header-search-results">
            <div className="google-logo-container">
              <img
                src="/images/googleLogo.png"
                className="google-logo-header"
                onClick={()=>router.push('/')}
              ></img>
            </div>
            <div className="right-header">
              <div className="upload-text-and-icon">
                <div className="upload-icon-container">
                  <MdOutlineFileUpload className="upload-icon" />
                </div>
                <div className="upload-text">Upload</div>
              </div>
              <div className="grid-and-account">
                <div className="grid-icon-container">
                  <CgMenuGridO className="grid-icon" />
                </div>
                <div className="account-container">A</div>
              </div>
            </div>
          </div>
  )
}

export default ResultPageHeader