"use client"
import { useRouter } from "next/navigation";
import './Icons.css'
function VoiceSearch() {
  const router = useRouter();
  return (
    <button className="voice-search" onClick = {()=>router.push('/speak')}>
    <img
      src="/images/mic.png"
      className="micIcon"
      alt="Mic"
      title="Search by voice"
    />
  </button>
  )
}

export default VoiceSearch