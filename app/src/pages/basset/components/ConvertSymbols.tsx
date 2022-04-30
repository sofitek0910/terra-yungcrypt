import { fixHMR } from 'fix-hmr';
import React, { ReactNode } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

export interface ConvertSymbolsProps {
  className?: string;
  view: 'mint' | 'burn' | 'import' | 'export';
  fromIcon: ReactNode;
  toIcon: ReactNode;
}

function Component({ className, view, fromIcon, toIcon }: ConvertSymbolsProps) {
  return (
    <div className={className}>
      <svg
        width={360}
        height={110}
        viewBox="0 0 360 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="305" cy="55" r="54.5" fill="var(--color-background)" />
        <circle cx="55" cy="55" r="54.5" fill="var(--color-background)" />
        {view === 'mint' && (
          <>
            <path
              d="M248.207 50.7071C248.598 50.3166 248.598 49.6834 248.207 49.2929L241.843 42.9289C241.453 42.5384 240.819 42.5384 240.429 42.9289C240.038 43.3195 240.038 43.9526 240.429 44.3431L246.086 50L240.429 55.6569C240.038 56.0474 240.038 56.6805 240.429 57.0711C240.819 57.4616 241.453 57.4616 241.843 57.0711L248.207 50.7071ZM247.5 49H112.5V51H247.5V49Z"
              fill="var(--color-primitive)"
            />
            <path
              d="M111.793 61.2929C111.402 61.6834 111.402 62.3166 111.793 62.7071L118.157 69.0711C118.547 69.4616 119.181 69.4616 119.571 69.0711C119.962 68.6805 119.962 68.0474 119.571 67.6569L113.914 62L119.571 56.3431C119.962 55.9526 119.962 55.3195 119.571 54.9289C119.181 54.5384 118.547 54.5384 118.157 54.9289L111.793 61.2929ZM245.515 61C244.962 61 244.515 61.4477 244.515 62C244.515 62.5523 244.962 63 245.515 63V61ZM241.544 63C242.096 63 242.544 62.5523 242.544 62C242.544 61.4477 242.096 61 241.544 61V63ZM237.574 61C237.021 61 236.574 61.4477 236.574 62C236.574 62.5523 237.021 63 237.574 63V61ZM233.603 63C234.155 63 234.603 62.5523 234.603 62C234.603 61.4477 234.155 61 233.603 61V63ZM229.632 61C229.08 61 228.632 61.4477 228.632 62C228.632 62.5523 229.08 63 229.632 63V61ZM225.662 63C226.214 63 226.662 62.5523 226.662 62C226.662 61.4477 226.214 61 225.662 61V63ZM221.691 61C221.139 61 220.691 61.4477 220.691 62C220.691 62.5523 221.139 63 221.691 63V61ZM217.721 63C218.273 63 218.721 62.5523 218.721 62C218.721 61.4477 218.273 61 217.721 61V63ZM213.75 61C213.198 61 212.75 61.4477 212.75 62C212.75 62.5523 213.198 63 213.75 63V61ZM209.779 63C210.332 63 210.779 62.5523 210.779 62C210.779 61.4477 210.332 61 209.779 61V63ZM205.809 61C205.257 61 204.809 61.4477 204.809 62C204.809 62.5523 205.257 63 205.809 63V61ZM201.838 63C202.391 63 202.838 62.5523 202.838 62C202.838 61.4477 202.391 61 201.838 61V63ZM197.868 61C197.315 61 196.868 61.4477 196.868 62C196.868 62.5523 197.315 63 197.868 63V61ZM193.897 63C194.449 63 194.897 62.5523 194.897 62C194.897 61.4477 194.449 61 193.897 61V63ZM189.926 61C189.374 61 188.926 61.4477 188.926 62C188.926 62.5523 189.374 63 189.926 63V61ZM185.956 63C186.508 63 186.956 62.5523 186.956 62C186.956 61.4477 186.508 61 185.956 61V63ZM181.985 61C181.433 61 180.985 61.4477 180.985 62C180.985 62.5523 181.433 63 181.985 63V61ZM178.015 63C178.567 63 179.015 62.5523 179.015 62C179.015 61.4477 178.567 61 178.015 61V63ZM174.044 61C173.492 61 173.044 61.4477 173.044 62C173.044 62.5523 173.492 63 174.044 63V61ZM170.074 63C170.626 63 171.074 62.5523 171.074 62C171.074 61.4477 170.626 61 170.074 61V63ZM166.103 61C165.551 61 165.103 61.4477 165.103 62C165.103 62.5523 165.551 63 166.103 63V61ZM162.132 63C162.685 63 163.132 62.5523 163.132 62C163.132 61.4477 162.685 61 162.132 61V63ZM158.162 61C157.609 61 157.162 61.4477 157.162 62C157.162 62.5523 157.609 63 158.162 63V61ZM154.191 63C154.743 63 155.191 62.5523 155.191 62C155.191 61.4477 154.743 61 154.191 61V63ZM150.221 61C149.668 61 149.221 61.4477 149.221 62C149.221 62.5523 149.668 63 150.221 63V61ZM146.25 63C146.802 63 147.25 62.5523 147.25 62C147.25 61.4477 146.802 61 146.25 61V63ZM142.279 61C141.727 61 141.279 61.4477 141.279 62C141.279 62.5523 141.727 63 142.279 63V61ZM138.309 63C138.861 63 139.309 62.5523 139.309 62C139.309 61.4477 138.861 61 138.309 61V63ZM134.338 61C133.786 61 133.338 61.4477 133.338 62C133.338 62.5523 133.786 63 134.338 63V61ZM130.368 63C130.92 63 131.368 62.5523 131.368 62C131.368 61.4477 130.92 61 130.368 61V63ZM126.397 61C125.845 61 125.397 61.4477 125.397 62C125.397 62.5523 125.845 63 126.397 63V61ZM122.426 63C122.979 63 123.426 62.5523 123.426 62C123.426 61.4477 122.979 61 122.426 61V63ZM118.456 61C117.904 61 117.456 61.4477 117.456 62C117.456 62.5523 117.904 63 118.456 63V61ZM114.485 63C115.038 63 115.485 62.5523 115.485 62C115.485 61.4477 115.038 61 114.485 61V63ZM247.5 61H245.515V63H247.5V61ZM241.544 61H237.574V63H241.544V61ZM233.603 61H229.632V63H233.603V61ZM225.662 61H221.691V63H225.662V61ZM217.721 61H213.75V63H217.721V61ZM209.779 61H205.809V63H209.779V61ZM201.838 61H197.868V63H201.838V61ZM193.897 61H189.926V63H193.897V61ZM185.956 61H181.985V63H185.956V61ZM178.015 61H174.044V63H178.015V61ZM170.074 61H166.103V63H170.074V61ZM162.132 61H158.162V63H162.132V61ZM154.191 61H150.221V63H154.191V61ZM146.25 61H142.279V63H146.25V61ZM138.309 61H134.338V63H138.309V61ZM130.368 61H126.397V63H130.368V61ZM122.426 61H118.456V63H122.426V61ZM114.485 61H112.5V63H114.485V61Z"
              fill="var(--color-dim)"
            />
            <rect
              x="153"
              y="15"
              width="54"
              height="23"
              rx="4"
              fill="var(--color-primitive)"
            />
            <path
              d="M160.653 32H163.069V24.736L166.189 29.472H166.253L169.405 24.688V32H171.853V20.8H169.197L166.253 25.536L163.309 20.8H160.653V32ZM174.356 32H176.82V20.8H174.356V32ZM179.319 32H181.751V24.88L187.175 32H189.271V20.8H186.839V27.696L181.591 20.8H179.319V32ZM194.268 32H196.732V23.072H200.14V20.8H190.86V23.072H194.268V32Z"
              fill="var(--color-text)"
            />
            <rect
              x="150.5"
              y="74"
              width="59"
              height="23"
              rx="4"
              fill="var(--color-dim)"
            />
            <path
              d="M157.872 91H163.2C165.728 91 167.392 89.976 167.392 87.928V87.896C167.392 86.392 166.592 85.64 165.296 85.144C166.096 84.696 166.768 83.992 166.768 82.728V82.696C166.768 81.928 166.512 81.304 166 80.792C165.36 80.152 164.352 79.8 163.072 79.8H157.872V91ZM164.32 83.144C164.32 83.976 163.632 84.328 162.544 84.328H160.272V81.96H162.704C163.744 81.96 164.32 82.376 164.32 83.112V83.144ZM164.944 87.592V87.624C164.944 88.456 164.288 88.84 163.2 88.84H160.272V86.376H163.12C164.384 86.376 164.944 86.84 164.944 87.592ZM173.791 91.176C176.799 91.176 178.703 89.512 178.703 86.12V79.8H176.239V86.216C176.239 87.992 175.327 88.904 173.823 88.904C172.319 88.904 171.407 87.96 171.407 86.136V79.8H168.943V86.2C168.943 89.496 170.783 91.176 173.791 91.176ZM180.913 91H183.377V87.416H185.313L187.713 91H190.593L187.857 87C189.281 86.472 190.257 85.336 190.257 83.528V83.496C190.257 82.44 189.921 81.56 189.297 80.936C188.561 80.2 187.457 79.8 186.033 79.8H180.913V91ZM183.377 85.24V82.024H185.825C187.025 82.024 187.761 82.568 187.761 83.624V83.656C187.761 84.6 187.073 85.24 185.873 85.24H183.377ZM192.175 91H194.607V83.88L200.031 91H202.127V79.8H199.695V86.696L194.447 79.8H192.175V91Z"
              fill="var(--color-text)"
            />
          </>
        )}
        {view === 'burn' && (
          <>
            <path
              d="M248.207 50.7071C248.598 50.3166 248.598 49.6834 248.207 49.2929L241.843 42.9289C241.453 42.5384 240.819 42.5384 240.429 42.9289C240.038 43.3195 240.038 43.9526 240.429 44.3431L246.086 50L240.429 55.6569C240.038 56.0474 240.038 56.6805 240.429 57.0711C240.819 57.4616 241.453 57.4616 241.843 57.0711L248.207 50.7071ZM245.515 49C244.962 49 244.515 49.4477 244.515 50C244.515 50.5523 244.962 51 245.515 51V49ZM241.544 51C242.096 51 242.544 50.5523 242.544 50C242.544 49.4477 242.096 49 241.544 49V51ZM237.574 49C237.021 49 236.574 49.4477 236.574 50C236.574 50.5523 237.021 51 237.574 51V49ZM233.603 51C234.155 51 234.603 50.5523 234.603 50C234.603 49.4477 234.155 49 233.603 49V51ZM229.632 49C229.08 49 228.632 49.4477 228.632 50C228.632 50.5523 229.08 51 229.632 51V49ZM225.662 51C226.214 51 226.662 50.5523 226.662 50C226.662 49.4477 226.214 49 225.662 49V51ZM221.691 49C221.139 49 220.691 49.4477 220.691 50C220.691 50.5523 221.139 51 221.691 51V49ZM217.721 51C218.273 51 218.721 50.5523 218.721 50C218.721 49.4477 218.273 49 217.721 49V51ZM213.75 49C213.198 49 212.75 49.4477 212.75 50C212.75 50.5523 213.198 51 213.75 51V49ZM209.779 51C210.332 51 210.779 50.5523 210.779 50C210.779 49.4477 210.332 49 209.779 49V51ZM205.809 49C205.257 49 204.809 49.4477 204.809 50C204.809 50.5523 205.257 51 205.809 51V49ZM201.838 51C202.391 51 202.838 50.5523 202.838 50C202.838 49.4477 202.391 49 201.838 49V51ZM197.868 49C197.315 49 196.868 49.4477 196.868 50C196.868 50.5523 197.315 51 197.868 51V49ZM193.897 51C194.449 51 194.897 50.5523 194.897 50C194.897 49.4477 194.449 49 193.897 49V51ZM189.926 49C189.374 49 188.926 49.4477 188.926 50C188.926 50.5523 189.374 51 189.926 51V49ZM185.956 51C186.508 51 186.956 50.5523 186.956 50C186.956 49.4477 186.508 49 185.956 49V51ZM181.985 49C181.433 49 180.985 49.4477 180.985 50C180.985 50.5523 181.433 51 181.985 51V49ZM178.015 51C178.567 51 179.015 50.5523 179.015 50C179.015 49.4477 178.567 49 178.015 49V51ZM174.044 49C173.492 49 173.044 49.4477 173.044 50C173.044 50.5523 173.492 51 174.044 51V49ZM170.074 51C170.626 51 171.074 50.5523 171.074 50C171.074 49.4477 170.626 49 170.074 49V51ZM166.103 49C165.551 49 165.103 49.4477 165.103 50C165.103 50.5523 165.551 51 166.103 51V49ZM162.132 51C162.685 51 163.132 50.5523 163.132 50C163.132 49.4477 162.685 49 162.132 49V51ZM158.162 49C157.609 49 157.162 49.4477 157.162 50C157.162 50.5523 157.609 51 158.162 51V49ZM154.191 51C154.743 51 155.191 50.5523 155.191 50C155.191 49.4477 154.743 49 154.191 49V51ZM150.221 49C149.668 49 149.221 49.4477 149.221 50C149.221 50.5523 149.668 51 150.221 51V49ZM146.25 51C146.802 51 147.25 50.5523 147.25 50C147.25 49.4477 146.802 49 146.25 49V51ZM142.279 49C141.727 49 141.279 49.4477 141.279 50C141.279 50.5523 141.727 51 142.279 51V49ZM138.309 51C138.861 51 139.309 50.5523 139.309 50C139.309 49.4477 138.861 49 138.309 49V51ZM134.338 49C133.786 49 133.338 49.4477 133.338 50C133.338 50.5523 133.786 51 134.338 51V49ZM130.368 51C130.92 51 131.368 50.5523 131.368 50C131.368 49.4477 130.92 49 130.368 49V51ZM126.397 49C125.845 49 125.397 49.4477 125.397 50C125.397 50.5523 125.845 51 126.397 51V49ZM122.426 51C122.979 51 123.426 50.5523 123.426 50C123.426 49.4477 122.979 49 122.426 49V51ZM118.456 49C117.904 49 117.456 49.4477 117.456 50C117.456 50.5523 117.904 51 118.456 51V49ZM114.485 51C115.038 51 115.485 50.5523 115.485 50C115.485 49.4477 115.038 49 114.485 49V51ZM247.5 49H245.515V51H247.5V49ZM241.544 49H237.574V51H241.544V49ZM233.603 49H229.632V51H233.603V49ZM225.662 49H221.691V51H225.662V49ZM217.721 49H213.75V51H217.721V49ZM209.779 49H205.809V51H209.779V49ZM201.838 49H197.868V51H201.838V49ZM193.897 49H189.926V51H193.897V49ZM185.956 49H181.985V51H185.956V49ZM178.015 49H174.044V51H178.015V49ZM170.074 49H166.103V51H170.074V49ZM162.132 49H158.162V51H162.132V49ZM154.191 49H150.221V51H154.191V49ZM146.25 49H142.279V51H146.25V49ZM138.309 49H134.338V51H138.309V49ZM130.368 49H126.397V51H130.368V49ZM122.426 49H118.456V51H122.426V49ZM114.485 49H112.5V51H114.485V49Z"
              fill="var(--color-dim)"
            />
            <path
              d="M111.793 61.2929C111.402 61.6834 111.402 62.3166 111.793 62.7071L118.157 69.0711C118.547 69.4616 119.181 69.4616 119.571 69.0711C119.962 68.6805 119.962 68.0474 119.571 67.6569L113.914 62L119.571 56.3431C119.962 55.9526 119.962 55.3195 119.571 54.9289C119.181 54.5384 118.547 54.5384 118.157 54.9289L111.793 61.2929ZM247.5 61H112.5V63H247.5V61Z"
              fill="var(--color-primitive)"
            />
            <rect
              x="153"
              y="15"
              width="54"
              height="23"
              rx="4"
              fill="var(--color-dim)"
            />
            <path
              d="M160.653 32H163.069V24.736L166.189 29.472H166.253L169.405 24.688V32H171.853V20.8H169.197L166.253 25.536L163.309 20.8H160.653V32ZM174.356 32H176.82V20.8H174.356V32ZM179.319 32H181.751V24.88L187.175 32H189.271V20.8H186.839V27.696L181.591 20.8H179.319V32ZM194.268 32H196.732V23.072H200.14V20.8H190.86V23.072H194.268V32Z"
              fill="var(--color-text)"
            />
            <rect
              x="150.5"
              y="74"
              width="59"
              height="23"
              rx="4"
              fill="var(--color-primitive)"
            />
            <path
              d="M157.872 91H163.2C165.728 91 167.392 89.976 167.392 87.928V87.896C167.392 86.392 166.592 85.64 165.296 85.144C166.096 84.696 166.768 83.992 166.768 82.728V82.696C166.768 81.928 166.512 81.304 166 80.792C165.36 80.152 164.352 79.8 163.072 79.8H157.872V91ZM164.32 83.144C164.32 83.976 163.632 84.328 162.544 84.328H160.272V81.96H162.704C163.744 81.96 164.32 82.376 164.32 83.112V83.144ZM164.944 87.592V87.624C164.944 88.456 164.288 88.84 163.2 88.84H160.272V86.376H163.12C164.384 86.376 164.944 86.84 164.944 87.592ZM173.791 91.176C176.799 91.176 178.703 89.512 178.703 86.12V79.8H176.239V86.216C176.239 87.992 175.327 88.904 173.823 88.904C172.319 88.904 171.407 87.96 171.407 86.136V79.8H168.943V86.2C168.943 89.496 170.783 91.176 173.791 91.176ZM180.913 91H183.377V87.416H185.313L187.713 91H190.593L187.857 87C189.281 86.472 190.257 85.336 190.257 83.528V83.496C190.257 82.44 189.921 81.56 189.297 80.936C188.561 80.2 187.457 79.8 186.033 79.8H180.913V91ZM183.377 85.24V82.024H185.825C187.025 82.024 187.761 82.568 187.761 83.624V83.656C187.761 84.6 187.073 85.24 185.873 85.24H183.377ZM192.175 91H194.607V83.88L200.031 91H202.127V79.8H199.695V86.696L194.447 79.8H192.175V91Z"
              fill="var(--color-text)"
            />
          </>
        )}
        {view === 'import' && (
          <>
            <path
              d="M248.707 59.7071C249.098 59.3166 249.098 58.6834 248.707 58.2929L242.343 51.9289C241.953 51.5384 241.319 51.5384 240.929 51.9289C240.538 52.3195 240.538 52.9526 240.929 53.3431L246.586 59L240.929 64.6569C240.538 65.0474 240.538 65.6805 240.929 66.0711C241.319 66.4616 241.953 66.4616 242.343 66.0711L248.707 59.7071ZM113 60H248V58H113V60Z"
              fill="var(--color-primitive)"
            />
            <rect
              x="139.5"
              y="48"
              width="78"
              height="20"
              rx="4"
              fill="var(--color-primitive)"
            />
            <path
              d="M151.049 63.156C152.752 63.156 153.792 62.532 154.741 61.544L153.714 60.504C152.934 61.232 152.219 61.674 151.101 61.674C149.359 61.674 148.098 60.231 148.098 58.45V58.424C148.098 56.643 149.372 55.226 151.088 55.226C152.141 55.226 152.908 55.668 153.649 56.344L154.676 55.161C153.805 54.329 152.791 53.744 151.101 53.744C148.358 53.744 146.421 55.863 146.421 58.45V58.476C146.421 61.089 148.384 63.156 151.049 63.156ZM160.323 63.156C163.118 63.156 165.094 61.011 165.094 58.45V58.424C165.094 55.863 163.144 53.744 160.349 53.744C157.554 53.744 155.578 55.889 155.578 58.45V58.476C155.578 61.037 157.528 63.156 160.323 63.156ZM160.349 61.674C158.542 61.674 157.255 60.218 157.255 58.45V58.424C157.255 56.656 158.516 55.226 160.323 55.226C162.13 55.226 163.417 56.682 163.417 58.45V58.476C163.417 60.244 162.156 61.674 160.349 61.674ZM166.826 63H168.399V56.526L173.417 63H174.756V53.9H173.183V60.192L168.308 53.9H166.826V63ZM179.886 63.065H181.316L185.086 53.9H183.357L180.627 60.894L177.884 53.9H176.116L179.886 63.065ZM186.446 63H193.258V61.57H188.045V59.139H192.608V57.696H188.045V55.33H193.193V53.9H186.446V63ZM194.955 63H196.554V59.828H198.556L200.792 63H202.69L200.233 59.555C201.494 59.191 202.391 58.294 202.391 56.799V56.773C202.391 55.98 202.118 55.304 201.637 54.81C201.052 54.238 200.155 53.9 199.011 53.9H194.955V63ZM196.554 58.411V55.356H198.881C200.064 55.356 200.766 55.889 200.766 56.864V56.89C200.766 57.813 200.038 58.411 198.894 58.411H196.554ZM206.36 63H207.959V55.382H210.858V53.9H203.461V55.382H206.36V63Z"
              fill="var(--color-text)"
            />
          </>
        )}
        {view === 'export' && (
          <>
            <path
              d="M112.293 59.7071C111.902 59.3166 111.902 58.6834 112.293 58.2929L118.657 51.9289C119.047 51.5384 119.681 51.5384 120.071 51.9289C120.462 52.3195 120.462 52.9526 120.071 53.3431L114.414 59L120.071 64.6569C120.462 65.0474 120.462 65.6805 120.071 66.0711C119.681 66.4616 119.047 66.4616 118.657 66.0711L112.293 59.7071ZM248 60H113V58H248V60Z"
              fill="var(--color-primitive)"
            />
            <rect
              x="139.5"
              y="48"
              width="78"
              height="20"
              rx="4"
              fill="var(--color-primitive)"
            />
            <path
              d="M151.049 63.156C152.752 63.156 153.792 62.532 154.741 61.544L153.714 60.504C152.934 61.232 152.219 61.674 151.101 61.674C149.359 61.674 148.098 60.231 148.098 58.45V58.424C148.098 56.643 149.372 55.226 151.088 55.226C152.141 55.226 152.908 55.668 153.649 56.344L154.676 55.161C153.805 54.329 152.791 53.744 151.101 53.744C148.358 53.744 146.421 55.863 146.421 58.45V58.476C146.421 61.089 148.384 63.156 151.049 63.156ZM160.323 63.156C163.118 63.156 165.094 61.011 165.094 58.45V58.424C165.094 55.863 163.144 53.744 160.349 53.744C157.554 53.744 155.578 55.889 155.578 58.45V58.476C155.578 61.037 157.528 63.156 160.323 63.156ZM160.349 61.674C158.542 61.674 157.255 60.218 157.255 58.45V58.424C157.255 56.656 158.516 55.226 160.323 55.226C162.13 55.226 163.417 56.682 163.417 58.45V58.476C163.417 60.244 162.156 61.674 160.349 61.674ZM166.826 63H168.399V56.526L173.417 63H174.756V53.9H173.183V60.192L168.308 53.9H166.826V63ZM179.886 63.065H181.316L185.086 53.9H183.357L180.627 60.894L177.884 53.9H176.116L179.886 63.065ZM186.446 63H193.258V61.57H188.045V59.139H192.608V57.696H188.045V55.33H193.193V53.9H186.446V63ZM194.955 63H196.554V59.828H198.556L200.792 63H202.69L200.233 59.555C201.494 59.191 202.391 58.294 202.391 56.799V56.773C202.391 55.98 202.118 55.304 201.637 54.81C201.052 54.238 200.155 53.9 199.011 53.9H194.955V63ZM196.554 58.411V55.356H198.881C200.064 55.356 200.766 55.889 200.766 56.864V56.89C200.766 57.813 200.038 58.411 198.894 58.411H196.554ZM206.36 63H207.959V55.382H210.858V53.9H203.461V55.382H206.36V63Z"
              fill="var(--color-text)"
            />
          </>
        )}
      </svg>

      <i className="from-icon">{fromIcon}</i>

      <i className="to-icon">{toIcon}</i>
    </div>
  );
}

const colors = (theme: DefaultTheme) => {
  if (theme.palette.type === 'light') {
    return css`
      --color-background: white;
      --color-primitive: #38d938;
      --color-dim: #c2c2c2;
      --color-text: white;
    `;
  } else {
    return css`
      --color-background: #0c1226;
      --color-primitive: ${theme.colors.positive};
      --color-dim: #3b4350;
      --color-text: white;
    `;
  }
};

const StyledComponent = styled(Component)`
  position: relative;
  display: inline-block;
  font-size: 12px;

  ${({ theme }) => colors(theme)};

  .from-icon {
    position: absolute;
    left: 48px;
    top: 55px;
    transform: scale(5);
  }

  .to-icon {
    position: absolute;
    left: 298px;
    top: 55px;
    transform: scale(5);
  }
`;

export const ConvertSymbols = fixHMR(StyledComponent);

export const ConvertSymbolsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;

  @media (max-width: 800px) {
    margin-bottom: 40px;

    > * {
      transform: scale(0.8);
    }
  }
`;
