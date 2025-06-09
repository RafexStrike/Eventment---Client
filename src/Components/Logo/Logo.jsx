import React from 'react';

const Logo = ({ color = '#000', size = 64 }) => {
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 64 64"
          style={{ fill: 'none', stroke: color, strokeWidth: 2 }}
        >
          {/* Central Circle */}
          <circle cx="32" cy="32" r="16" stroke="currentColor" />
    
          {/* Zigzag Pattern Around the Circle */}
          <path
            d="M28,32 C28,28 30,25 32,25 C34,25 36,28 36,32 C36,36 34,39 32,39 C30,39 28,36 28,32 Z"
            transform="rotate(0, 32, 32)"
          />
          <path
            d="M28,32 C28,28 30,25 32,25 C34,25 36,28 36,32 C36,36 34,39 32,39 C30,39 28,36 28,32 Z"
            transform="rotate(45, 32, 32)"
          />
          <path
            d="M28,32 C28,28 30,25 32,25 C34,25 36,28 36,32 C36,36 34,39 32,39 C30,39 28,36 28,32 Z"
            transform="rotate(90, 32, 32)"
          />
          <path
            d="M28,32 C28,28 30,25 32,25 C34,25 36,28 36,32 C36,36 34,39 32,39 C30,39 28,36 28,32 Z"
            transform="rotate(135, 32, 32)"
          />
          <path
            d="M28,32 C28,28 30,25 32,25 C34,25 36,28 36,32 C36,36 34,39 32,39 C30,39 28,36 28,32 Z"
            transform="rotate(180, 32, 32)"
          />
          <path
            d="M28,32 C28,28 30,25 32,25 C34,25 36,28 36,32 C36,36 34,39 32,39 C30,39 28,36 28,32 Z"
            transform="rotate(225, 32, 32)"
          />
          <path
            d="M28,32 C28,28 30,25 32,25 C34,25 36,28 36,32 C36,36 34,39 32,39 C30,39 28,36 28,32 Z"
            transform="rotate(270, 32, 32)"
          />
          <path
            d="M28,32 C28,28 30,25 32,25 C34,25 36,28 36,32 C36,36 34,39 32,39 C30,39 28,36 28,32 Z"
            transform="rotate(315, 32, 32)"
          />
    
          {/* Radiating Lines */}
          <line x1="32" y1="16" x2="32" y2="48" />
          <line x1="22.6" y1="22.6" x2="41.4" y2="41.4" />
          <line x1="16" y1="32" x2="48" y2="32" />
          <line x1="22.6" y1="41.4" x2="41.4" y2="22.6" />
          <line x1="32" y1="48" x2="32" y2="16" />
          <line x1="41.4" y1="22.6" x2="22.6" y2="41.4" />
          <line x1="48" y1="32" x2="16" y2="32" />
          <line x1="41.4" y1="41.4" x2="22.6" y2="22.6" />
        </svg>
      );
    };

export default Logo;