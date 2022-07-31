export const Logo = () => (
  <svg
    width={455.349}
    height={129.2}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="22.325 10.4 455.349 129.2"
    style={{
      background: '0 0'
    }}
    preserveAspectRatio="xMidYMid"

  >
    <defs>
      <linearGradient id="b" x1={0.782} y1={0.397} x2={0.218} y2={0.603}>
        <stop offset={0} stopColor="#e4bd70" />
        <stop offset={1} />
      </linearGradient>
      <filter id="a" x="-100%" y="-100%" width="300%" height="300%">
        <feMorphology radius={1} in="SourceAlpha" result="alpha-erode" />
        <feConvolveMatrix
          order="3,3"
          divisor={1}
          kernelMatrix="0 1 0 1 1 1 0 1 0"
          in="alpha-erode"
          result="alpha-round"
        />
        <feMorphology
          operator="dilate"
          radius={3.5}
          in="alpha-round"
          result="dilate-shadow"
        />
        <feGaussianBlur in="dilate-shadow" stdDeviation={1.5} result="shadow" />
        <feFlood floodColor="#fff" result="flood-sticker" />
        <feComposite
          operator="in"
          in="flood-sticker"
          in2="alpha-round"
          result="comp-sticker"
        />
        <feMorphology
          operator="dilate"
          radius={3}
          in="comp-sticker"
          result="morph-sticker"
        />
        <feConvolveMatrix
          order="3,3"
          divisor={1}
          kernelMatrix="0 1 0 1 1 1 0 1 0"
          in="morph-sticker"
          result="sticker"
        />
        <feMerge>
          <feMergeNode in="shadow" />
          <feMergeNode in="sticker" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#a)">
      <path
        d="m35.07-31.17-.13 2.05q0 4.16 4.48 4.16 3.72 0 7.49-2.56 3.78-2.56 3.78-5.18 0-2.63-3.07-4.42-2.05-1.22-6.4-1.22-6.47 0-14.44 3.08-7.96 3.07-14.94 9.85-9.15 8.96-9.15 16.45 0 4.42 3.36 7.1Q9.41.83 14.85.83q7.55 0 17.53-5.69 8.32-4.68 12.48-9.92l1.86-2.76q-1.15 0-9.54.68-8.38.67-9.6.96-1.21.28-1.98.28-2.11 0-2.11-1.02 0-1.6 4.86-2.66 4.87-1.05 16.45-1.05 11.58 0 15.3.89.57.13.57.32 0 .71-4.41 1.03-5.51.45-5.64.45Q44.1-9.09 33.73 8.83q-.58 1.03-1.12 1.03-.55 0-.55-.84 0-2.24 3.59-8.64L40.13-8q-4.1 3.52-10.43 6.59Q21.44 2.5 14.11 2.5T2.91-.67Q-.96-3.84-.96-9.15q0-9.79 11.84-19.91 5.95-5.12 14.4-8.51 8.45-3.39 14.82-3.39 6.36 0 9.76 2.5 2.62 2.04 2.62 4.6 0 3.65-4.51 7.01t-8.93 3.36q-5.95 0-5.95-6.85 0-2.62 1.09-2.62.89 0 .89 1.79Zm39.3 11.65.89-.19q.84 0 1.32.51.48.51.48.8 0 .29-.07.64-.06.35-1.85 3.23-2.24 3.91-3.72 6.59-5.18 9.67-7.93 13.25-5.89 7.81-11.2 7.81-1.86 0-3.23-1.57-1.38-1.57-1.44-3.49.19-.76.57-.76.19 0 .32.44.32 1.67 1.22 2.56.89.9 1.79.9 3.65 0 7.81-4.8 2.75-3.2 6.08-9.34l3.2-6.34-4.8 4.86Q59.2 0 57.5 0q-1.69 0-3.23-1.15-1.73-1.28-1.73-3.39 0-4.68 6.56-11.14 6.56-6.46 11.94-6.46 2.18 0 2.82 1.4.19.52.32.87.12.35.19.35ZM55.23-3.78q0 2.31 1.6 2.31 3.71 0 10.11-8.13l6.79-9.34q-.39-.9-1.6-.9-3.97 0-10.43 6.11-6.47 6.11-6.47 9.95Zm50.11 10.31q-.06 0-.06-.1 0-.09.26-1.18.96-4.03 1.98-9.03 2.11-12.28 2.11-24.38 0-4.99-.38-7.55-.77-3.2-.77-3.78 0-.57 1.09-.57 2.56 0 2.56 5.66t-1.83 21.66q-1.82 16-3.42 18.18-.77 1.09-1.54 1.09Zm83.78-37.7-.13 2.05q0 4.16 4.48 4.16 3.71 0 7.49-2.56 3.78-2.56 3.78-5.18 0-2.63-3.08-4.42-2.04-1.22-6.4-1.22-6.46 0-14.43 3.08-7.97 3.07-14.94 9.85-9.15 8.96-9.15 16.45 0 4.42 3.36 7.1 3.36 2.69 8.8 2.69 7.55 0 17.53-5.69 8.32-4.68 12.48-9.92l1.86-2.76q-1.15 0-9.54.68-8.38.67-9.6.96-1.21.28-1.98.28-2.11 0-2.11-1.02 0-1.6 4.86-2.66 4.86-1.05 16.45-1.05 11.58 0 15.29.89.58.13.58.32 0 .71-4.42 1.03-5.5.45-5.63.45-6.53 8.57-16.89 26.49-.58 1.03-1.12 1.03-.55 0-.55-.84 0-2.24 3.59-8.64L194.18-8q-4.1 3.52-10.44 6.59-8.25 3.91-15.58 3.91t-11.2-3.17q-3.87-3.17-3.87-8.48 0-9.79 11.84-19.91 5.95-5.12 14.4-8.51 8.45-3.39 14.81-3.39 6.37 0 9.76 2.5 2.63 2.04 2.63 4.6 0 3.65-4.51 7.01-4.52 3.36-8.93 3.36-5.95 0-5.95-6.85 0-2.62 1.08-2.62.9 0 .9 1.79Zm31.81 5.06q.96 0 1.82.61.87.6.87 1.44 0 .83-.8 1.44-.8.6-1.76.6t-1.76-.7q-.8-.7-.8-1.6 0-1.79 2.43-1.79ZM209.34.7q-3.26 0-3.26-4.22 0-3.46 3.78-9.57 3.77-6.11 6.08-6.17.64 0 1.44.51.8.51.8 1.02-.32.45-.77.99-.45.55-.96 1.19-.51.64-1.41 1.82-.9 1.19-1.73 2.27-4.8 6.21-4.8 8.55 0 2.33 1.6 2.33 1.35 0 3.65-1.47 5.38-3.33 8.51-7.29 1.15-1.48 1.57-1.48.42 0 .42.52 0 .51-1.48 2.04l-2.33 2.44q-.87.89-1.19 1.18-.32.29-1.18 1.09-.86.8-1.31 1.12-.45.32-1.28.96-.83.64-1.47.93-.64.28-1.48.67-1.34.57-3.2.57Zm38.28-32q0 1.99-1.16 1.99-.32 0-.64-.51-.57-1.03-1.92-1.03-2.94 0-5.5 4.23-.51.83-3.2 6.01h.77q6.97 0 9.28-.19.25.06.25.26 0 .51-4.54 1.4-4.29.71-7.04 1.22-1.98 4.1-4.8 9.73-5.76 10.75-7.62 13.37-5.56 7.94-10.88 7.94-1.85 0-3.23-1.57-1.37-1.57-1.44-3.49.19-.76.58-.76.19 0 .25.44.39 1.67 1.28 2.56.9.9 1.86.9 5.44 0 9.92-6.72 2.56-3.84 6.98-13.82l3.45-8.32q-6.4-.07-6.4-1.54 0-.64.61-1.09.61-.45 1.06-.45l6.01.13q6.27-13.95 11.52-13.95 1.99 0 4.03 1.92.52.51.52 1.34Zm10.75 11.78.89-.19q.84 0 1.32.51.48.51.48.8 0 .29-.07.64-.06.35-1.85 3.23-2.24 3.91-3.72 6.59-5.18 9.67-7.93 13.25-5.89 7.81-11.2 7.81-1.86 0-3.23-1.57-1.38-1.57-1.44-3.49.19-.76.57-.76.19 0 .32.44.32 1.67 1.22 2.56.89.9 1.79.9 3.65 0 7.81-4.8 2.75-3.2 6.08-9.34l3.2-6.34-4.8 4.86Q243.2 0 241.5 0q-1.69 0-3.23-1.15-1.73-1.28-1.73-3.39 0-4.68 6.56-11.14 6.56-6.46 11.94-6.46 2.18 0 2.82 1.4.19.52.32.87.12.35.19.35ZM239.23-3.78q0 2.31 1.6 2.31 3.71 0 10.11-8.13l6.79-9.34q-.39-.9-1.6-.9-3.97 0-10.43 6.11-6.47 6.11-6.47 9.95Zm34.5 4.1q-4.8 0-4.8-5.31 0-2.69 1.41-5.89 1.4-3.2 3.07-5.38-.32.07-.83.07-1.54 0-2.56-2.18l-4.74 6.15q-3.97 4.92-4.61 4.92-.32 0-.32-.25 0-.64 1.09-1.86 5.57-6.46 7.87-10.94 1.47-5.57 3.71-5.57 1.48 0 1.48 1.28t-1.6 3.26l-1.54 2.05q0 1.35 1.98 1.35 1.16 0 2.56-.84l1.67-1.02q.13-.06.64-.06t1.09.64q.57.64.38 1.15l-4.42 5.57q-4.09 5.24-4.09 8.28 0 3.04 2.81 3.04 2.95 0 7.24-3.13 2.56-1.86 4.67-4.16 1.98-2.31 2.17-2.31.45 0 .45.48t-.57 1.12l-2.05 2.31q-1.73 1.79-3.84 3.45-5.06 3.78-8.32 3.78Zm33.41-19.46.89-.19q.71 0 1.35.58.64.57.64.89 0 .32-3.97 6.18-3.97 5.86-3.97 8.16 0 .19.06.38.32 1.48 1.41 1.48 3.33 0 12.16-11.01.19-.26.45-.26t.26.48q0 .48-.58 1.25Q307.65-.26 303.36-.26q-.58 0-1.09-.19-2.81-1.09-2.81-4.22 0-1.09.25-2.18l-3.97 3.84Q291.97.32 290.27.32q-1.69 0-3.23-1.09-1.73-1.28-1.73-3.39 0-4.67 6.53-11.17 6.53-6.49 11.97-6.49 2.11 0 2.81 1.47.2.51.32.86.13.35.2.35ZM288-3.39q0 2.3 1.6 2.3 3.71 0 10.11-8.13l6.79-9.34q-.52-.9-1.67-.9-3.9 0-10.37 6.05Q288-7.36 288-3.39Zm54.85 2.62q-4.35 0-4.35-4.03 0-2.3 2.04-6.3 2.05-4 4.29-6.76-3.97 1.92-9.15 6.95-5.18 5.02-7.23 10.53-.32.51-1.09.51-1.54 0-1.54-1.73.64-3.52 2.88-8.06.71-1.48 4.16-8.58-4.99 3.26-8.48 7.01-3.48 3.74-6.46 7.52-2.98 3.77-3.36 3.77-.83 0-1.44-.76-.61-.77-.61-1.54 0-1.15 3.33-8.45L312-6.66q-1.41 1.41-1.76 1.41-.35 0-.35-.41 0-.42.51-.93 2.37-2.37 4.22-4.74 1.86-2.37 6.15-8.45.7-.96 1.98-.96t1.28 1.22q0 .45-3.39 6.24t-3.78 7.26q2.63-2.88 7.88-7.74 7.87-7.3 10.36-7.3.77 0 1.41.45.64.45.64.99 0 .55-2.49 4.84-2.44 4.41-2.69 5.24 7.1-5.95 7.1-6.01 6.02-4.67 8.64-4.67.77 0 1.44.48.67.48.67 1.12 0 .12-4.16 5.4t-4.67 8.68q-.13 1.15.45 1.72.58.58 2.08.58t4.42-2.08q2.91-2.08 5.92-5.6 1.15-1.28 1.56-1.28.42 0 .42.32 0 .45-.58 1.02-3.13 3.78-6.75 6.44-3.61 2.65-5.66 2.65Z"
        fill="url(#b)"
        stroke="#000"
        strokeWidth={3}
        transform="translate(73.543 102.04)"
      />
    </g>
  </svg>
)