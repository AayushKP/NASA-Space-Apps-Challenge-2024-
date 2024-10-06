import React from 'react'

const PolicyCard = ({ 
  title, 
  organization, 
  ministry, 
  policyFramework 
}) => {
  return (
    <div className="w-full max-w-full mx-auto p-6">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <div 
          className="bg-gradient-to-r from-[rgba(213,213,213,0)] via-[rgba(18,18,18,0.5)] to-[rgba(185,185,185,0.2)]"
          style={{
            background: 'linear-gradient(90deg,#D4D4D4 0%, #121212 46%, #B9B9B9 67%, #B9B9B9 86%, #B9B9B9 100%);'
          }}
        >
          <div className="p-8 text-white">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold leading-tight">
                {title}
              </h2>
              <div className="text-right text-[#d4ed3e]">
                <p>Organization: {organization}</p>
                <p>Government Ministry: {ministry}</p>
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto pr-4">
              <h3 className="text-xl font-semibold mb-4">Policy Framework</h3>
              <ol className="list-decimal list-inside space-y-4">
                {policyFramework.map((policy, index) => (
                  <li key={index}>
                    <span className="font-semibold">{policy.heading}</span>
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                      {policy.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PolicyCard
