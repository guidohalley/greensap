'use client';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {/* Ícono de gota verde */}
      <svg
        width="24"
        height="32"
        viewBox="0 0 24 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary-dark"
      >
        <path
          d="M12 0C12 0 0 12 0 20C0 26.6274 5.37258 32 12 32C18.6274 32 24 26.6274 24 20C24 12 12 0 12 0Z"
          fill="currentColor"
        />
      </svg>
      {/* Texto logo */}
      <span className="text-2xl font-light">
        <span className="text-primary-dark font-normal">green</span>
        <span className="text-gray-400">·</span>
        <span className="text-primary-dark font-normal">sap</span>
      </span>
    </div>
  );
}
