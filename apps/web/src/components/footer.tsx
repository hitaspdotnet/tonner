export function Footer() {
  return (
    <footer className="flex items-center justify-center font-mono text-xs fixed bottom-8 w-full flex-col space-y-6">
      <span className="text-[#878787]">Featuring</span>

      <div className="relative flex overflow-x-hidden space-x-6">
        <div className="flex items-center space-x-6 animate-marquee whitespace-nowrap lg:animate-none">
          <a
            href="https://vercel.com?utm_source=tonner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={74}
              height={17}
              fill="none"
            >
              <path
                fill="#F5F5F3"
                d="M37.22 4.36c-2.857 0-4.917 1.863-4.917 4.658 0 2.794 2.32 4.658 5.176 4.658 1.726 0 3.248-.683 4.19-1.835l-1.98-1.144c-.523.572-1.317.906-2.21.906-1.24 0-2.293-.647-2.684-1.682h7.252c.057-.29.09-.59.09-.906 0-2.792-2.06-4.656-4.917-4.656Zm-2.448 3.752c.324-1.033 1.209-1.682 2.446-1.682 1.24 0 2.124.65 2.445 1.682h-4.89Zm30.315-3.753c-2.857 0-4.917 1.864-4.917 4.659 0 2.794 2.319 4.658 5.176 4.658 1.726 0 3.247-.683 4.19-1.835l-1.98-1.144c-.523.572-1.317.906-2.21.906-1.24 0-2.293-.647-2.684-1.682h7.251c.057-.29.09-.59.09-.906 0-2.792-2.06-4.656-4.916-4.656ZM62.64 8.112c.324-1.033 1.209-1.682 2.446-1.682 1.24 0 2.124.65 2.445 1.682h-4.89Zm-10.1.906c0 1.552 1.014 2.587 2.588 2.587 1.066 0 1.866-.483 2.277-1.273l1.988 1.147c-.823 1.371-2.366 2.197-4.265 2.197-2.86 0-4.917-1.864-4.917-4.658 0-2.795 2.06-4.659 4.917-4.659 1.9 0 3.439.826 4.265 2.198l-1.988 1.146c-.411-.79-1.211-1.273-2.277-1.273-1.571 0-2.588 1.035-2.588 2.588Zm21.345-7.505v11.904h-2.33V1.513h2.33ZM10.283.219l9.562 16.562H.721L10.283.22ZM34.19 1.513l-7.171 12.422-7.171-12.422h2.689l4.482 7.763L31.5 1.513h2.689Zm15.245 3.105v2.508a2.951 2.951 0 0 0-.828-.127c-1.503 0-2.588 1.035-2.588 2.588v3.83H43.69V4.618h2.33V7c0-1.315 1.529-2.38 3.415-2.38Z"
              />
            </svg>
          </a>

          <a
            href="https://supabase.com?utm_source=tonner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="101"
              height="21"
              viewBox="0 0 101 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_212_626)">
                <path
                  d="M26.6826 12.3162C26.7857 13.3076 27.6627 15.0071 30.2076 15.0071C32.4256 15.0071 33.4919 13.5554 33.4919 12.1392C33.4919 10.8646 32.6492 9.8201 30.9814 9.46601L29.7776 9.20048C29.3134 9.11197 29.004 8.84643 29.004 8.42155C29.004 7.92585 29.4854 7.55411 30.0873 7.55411C31.0501 7.55411 31.4112 8.2091 31.48 8.72252L33.3886 8.27994C33.2855 7.34167 32.4773 5.76611 30.0701 5.76611C28.2473 5.76611 26.9062 7.05843 26.9062 8.61627C26.9062 9.83778 27.6454 10.8469 29.279 11.2186L30.3967 11.4842C31.0501 11.6258 31.3081 11.9445 31.3081 12.3339C31.3081 12.7942 30.947 13.2014 30.1904 13.2014C29.1931 13.2014 28.6943 12.5641 28.6429 11.8736L26.6826 12.3162Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M40.8006 14.7412H42.9844C42.95 14.4402 42.8984 13.8383 42.8984 13.1656V6.03125H40.6113V11.0943C40.6113 12.1034 40.0268 12.8115 39.0123 12.8115C37.9462 12.8115 37.4647 12.0326 37.4647 11.0589V6.03125H35.1777V11.5369C35.1777 13.4311 36.3469 14.9713 38.3932 14.9713C39.2872 14.9713 40.2678 14.6172 40.732 13.8029C40.732 14.1569 40.7662 14.5641 40.8006 14.7412Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M47.6256 18.1051V13.8918C48.0382 14.476 48.8981 14.954 50.0674 14.954C52.4575 14.954 54.0564 13.0066 54.0564 10.3689C54.0564 7.78426 52.6294 5.83691 50.1533 5.83691C48.881 5.83691 47.9353 6.42109 47.5569 7.09383V6.03164H45.3389V18.1051H47.6256ZM51.8039 10.3866C51.8039 11.9445 50.8755 12.8473 49.7062 12.8473C48.5371 12.8473 47.5914 11.9268 47.5914 10.3866C47.5914 8.84644 48.5371 7.94357 49.7062 7.94357C50.8755 7.94357 51.8039 8.84644 51.8039 10.3866Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M55.3516 12.3693C55.3516 13.7325 56.4519 14.9894 58.2576 14.9894C59.5125 14.9894 60.3208 14.3875 60.7505 13.6971C60.7505 14.0334 60.785 14.5114 60.8366 14.7415H62.9344C62.8827 14.4406 62.8314 13.821 62.8314 13.3607V9.07656C62.8314 7.32395 61.834 5.76611 59.1517 5.76611C56.8819 5.76611 55.6609 7.27084 55.5235 8.63399L57.5524 9.07656C57.6213 8.31533 58.1715 7.66033 59.1686 7.66033C60.1318 7.66033 60.596 8.17371 60.596 8.79332C60.596 9.09427 60.4414 9.34213 59.9598 9.41293L57.8793 9.73158C56.4693 9.94403 55.3516 10.8115 55.3516 12.3693ZM58.7388 13.2368C57.9996 13.2368 57.6383 12.7411 57.6383 12.2277C57.6383 11.555 58.1025 11.2186 58.6874 11.1301L60.596 10.8292V11.2186C60.596 12.7588 59.7018 13.2368 58.7388 13.2368Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M67.355 14.7414V13.6792C67.8018 14.4227 68.6959 14.9538 69.8653 14.9538C72.2729 14.9538 73.8548 12.9887 73.8548 10.351C73.8548 7.76632 72.4274 5.8013 69.9513 5.8013C68.6959 5.8013 67.7675 6.36779 67.3892 6.98737V1.92432H65.1367V14.7414H67.355ZM71.5675 10.3687C71.5675 11.962 70.6391 12.8471 69.4698 12.8471C68.3178 12.8471 67.355 11.9443 67.355 10.3687C67.355 8.77539 68.3178 7.90795 69.4698 7.90795C70.6391 7.90795 71.5675 8.77539 71.5675 10.3687Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M75.1504 12.3693C75.1504 13.7325 76.2507 14.9894 78.0562 14.9894C79.3113 14.9894 80.1198 14.3875 80.5494 13.6971C80.5494 14.0334 80.584 14.5114 80.6354 14.7415H82.7332C82.6819 14.4406 82.6303 13.821 82.6303 13.3607V9.07656C82.6303 7.32395 81.6328 5.76611 78.9504 5.76611C76.6807 5.76611 75.4599 7.27084 75.3223 8.63399L77.3511 9.07656C77.4201 8.31533 77.9704 7.66033 78.9674 7.66033C79.9306 7.66033 80.3948 8.17371 80.3948 8.79332C80.3948 9.09427 80.2401 9.34213 79.7585 9.41293L77.6781 9.73158C76.2681 9.94403 75.1504 10.8115 75.1504 12.3693ZM78.5378 13.2368C77.7984 13.2368 77.4371 12.7411 77.4371 12.2277C77.4371 11.555 77.9013 11.2186 78.4862 11.1301L80.3948 10.8292V11.2186C80.3948 12.7588 79.5006 13.2368 78.5378 13.2368Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M84.2129 12.3162C84.3158 13.3076 85.1929 15.0071 87.7377 15.0071C89.9559 15.0071 91.0218 13.5554 91.0218 12.1392C91.0218 10.8646 90.1795 9.8201 88.5115 9.46601L87.3077 9.20048C86.8435 9.11197 86.5342 8.84643 86.5342 8.42155C86.5342 7.92585 87.0155 7.55411 87.6174 7.55411C88.5805 7.55411 88.9415 8.2091 89.0105 8.72252L90.9189 8.27994C90.8156 7.34167 90.0076 5.76611 87.6003 5.76611C85.7774 5.76611 84.4365 7.05843 84.4365 8.61627C84.4365 9.83778 85.1755 10.8469 86.8093 11.2186L87.927 11.4842C88.5805 11.6258 88.8384 11.9445 88.8384 12.3339C88.8384 12.7942 88.4773 13.2014 87.7206 13.2014C86.7232 13.2014 86.2248 12.5641 86.1731 11.8736L84.2129 12.3162Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M94.4955 9.39521C94.5472 8.59859 95.2007 7.67801 96.3871 7.67801C97.6938 7.67801 98.2442 8.52778 98.2787 9.39521H94.4955ZM98.5023 11.6612C98.227 12.4401 97.6424 12.9889 96.5763 12.9889C95.4413 12.9889 94.4955 12.1569 94.4442 11.0062H100.497C100.497 10.9708 100.531 10.6167 100.531 10.2804C100.531 7.48328 98.9665 5.76611 96.3527 5.76611C94.1862 5.76611 92.1914 7.57179 92.1914 10.3512C92.1914 13.2899 94.2375 15.0071 96.5591 15.0071C98.6396 15.0071 99.9809 13.7502 100.411 12.2454L98.5023 11.6612Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M11.5904 20.0194C11.0982 20.6567 10.1003 20.3075 10.0884 19.4937L9.91504 7.59082H17.6981C19.1078 7.59082 19.8941 9.26517 19.0175 10.4005L11.5904 20.0194Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M11.5904 20.0194C11.0982 20.6567 10.1003 20.3075 10.0884 19.4937L9.91504 7.59082H17.6981C19.1078 7.59082 19.8941 9.26517 19.0175 10.4005L11.5904 20.0194Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M8.42449 0.866774C8.91666 0.229359 9.91459 0.578616 9.92645 1.39243L10.0024 13.2953H2.31677C0.906999 13.2953 0.120746 11.6209 0.997382 10.4856L8.42449 0.866774Z"
                  fill="#F5F5F3"
                />
              </g>
              <defs>
                <clipPath id="clip0_212_626">
                  <rect
                    width="100"
                    height="20"
                    fill="white"
                    transform="translate(0.625 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>

        <div className="flex items-center space-x-6 animate-marquee2 whitespace-nowrap absolute top-0 lg:hidden">
          <a
            href="https://vercel.com?utm_source=tonner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={74}
              height={17}
              fill="none"
            >
              <path
                fill="#F5F5F3"
                d="M37.22 4.36c-2.857 0-4.917 1.863-4.917 4.658 0 2.794 2.32 4.658 5.176 4.658 1.726 0 3.248-.683 4.19-1.835l-1.98-1.144c-.523.572-1.317.906-2.21.906-1.24 0-2.293-.647-2.684-1.682h7.252c.057-.29.09-.59.09-.906 0-2.792-2.06-4.656-4.917-4.656Zm-2.448 3.752c.324-1.033 1.209-1.682 2.446-1.682 1.24 0 2.124.65 2.445 1.682h-4.89Zm30.315-3.753c-2.857 0-4.917 1.864-4.917 4.659 0 2.794 2.319 4.658 5.176 4.658 1.726 0 3.247-.683 4.19-1.835l-1.98-1.144c-.523.572-1.317.906-2.21.906-1.24 0-2.293-.647-2.684-1.682h7.251c.057-.29.09-.59.09-.906 0-2.792-2.06-4.656-4.916-4.656ZM62.64 8.112c.324-1.033 1.209-1.682 2.446-1.682 1.24 0 2.124.65 2.445 1.682h-4.89Zm-10.1.906c0 1.552 1.014 2.587 2.588 2.587 1.066 0 1.866-.483 2.277-1.273l1.988 1.147c-.823 1.371-2.366 2.197-4.265 2.197-2.86 0-4.917-1.864-4.917-4.658 0-2.795 2.06-4.659 4.917-4.659 1.9 0 3.439.826 4.265 2.198l-1.988 1.146c-.411-.79-1.211-1.273-2.277-1.273-1.571 0-2.588 1.035-2.588 2.588Zm21.345-7.505v11.904h-2.33V1.513h2.33ZM10.283.219l9.562 16.562H.721L10.283.22ZM34.19 1.513l-7.171 12.422-7.171-12.422h2.689l4.482 7.763L31.5 1.513h2.689Zm15.245 3.105v2.508a2.951 2.951 0 0 0-.828-.127c-1.503 0-2.588 1.035-2.588 2.588v3.83H43.69V4.618h2.33V7c0-1.315 1.529-2.38 3.415-2.38Z"
              />
            </svg>
          </a>

          <a
            href="https://supabase.com?utm_source=tonner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="101"
              height="21"
              viewBox="0 0 101 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_212_626)">
                <path
                  d="M26.6826 12.3162C26.7857 13.3076 27.6627 15.0071 30.2076 15.0071C32.4256 15.0071 33.4919 13.5554 33.4919 12.1392C33.4919 10.8646 32.6492 9.8201 30.9814 9.46601L29.7776 9.20048C29.3134 9.11197 29.004 8.84643 29.004 8.42155C29.004 7.92585 29.4854 7.55411 30.0873 7.55411C31.0501 7.55411 31.4112 8.2091 31.48 8.72252L33.3886 8.27994C33.2855 7.34167 32.4773 5.76611 30.0701 5.76611C28.2473 5.76611 26.9062 7.05843 26.9062 8.61627C26.9062 9.83778 27.6454 10.8469 29.279 11.2186L30.3967 11.4842C31.0501 11.6258 31.3081 11.9445 31.3081 12.3339C31.3081 12.7942 30.947 13.2014 30.1904 13.2014C29.1931 13.2014 28.6943 12.5641 28.6429 11.8736L26.6826 12.3162Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M40.8006 14.7412H42.9844C42.95 14.4402 42.8984 13.8383 42.8984 13.1656V6.03125H40.6113V11.0943C40.6113 12.1034 40.0268 12.8115 39.0123 12.8115C37.9462 12.8115 37.4647 12.0326 37.4647 11.0589V6.03125H35.1777V11.5369C35.1777 13.4311 36.3469 14.9713 38.3932 14.9713C39.2872 14.9713 40.2678 14.6172 40.732 13.8029C40.732 14.1569 40.7662 14.5641 40.8006 14.7412Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M47.6256 18.1051V13.8918C48.0382 14.476 48.8981 14.954 50.0674 14.954C52.4575 14.954 54.0564 13.0066 54.0564 10.3689C54.0564 7.78426 52.6294 5.83691 50.1533 5.83691C48.881 5.83691 47.9353 6.42109 47.5569 7.09383V6.03164H45.3389V18.1051H47.6256ZM51.8039 10.3866C51.8039 11.9445 50.8755 12.8473 49.7062 12.8473C48.5371 12.8473 47.5914 11.9268 47.5914 10.3866C47.5914 8.84644 48.5371 7.94357 49.7062 7.94357C50.8755 7.94357 51.8039 8.84644 51.8039 10.3866Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M55.3516 12.3693C55.3516 13.7325 56.4519 14.9894 58.2576 14.9894C59.5125 14.9894 60.3208 14.3875 60.7505 13.6971C60.7505 14.0334 60.785 14.5114 60.8366 14.7415H62.9344C62.8827 14.4406 62.8314 13.821 62.8314 13.3607V9.07656C62.8314 7.32395 61.834 5.76611 59.1517 5.76611C56.8819 5.76611 55.6609 7.27084 55.5235 8.63399L57.5524 9.07656C57.6213 8.31533 58.1715 7.66033 59.1686 7.66033C60.1318 7.66033 60.596 8.17371 60.596 8.79332C60.596 9.09427 60.4414 9.34213 59.9598 9.41293L57.8793 9.73158C56.4693 9.94403 55.3516 10.8115 55.3516 12.3693ZM58.7388 13.2368C57.9996 13.2368 57.6383 12.7411 57.6383 12.2277C57.6383 11.555 58.1025 11.2186 58.6874 11.1301L60.596 10.8292V11.2186C60.596 12.7588 59.7018 13.2368 58.7388 13.2368Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M67.355 14.7414V13.6792C67.8018 14.4227 68.6959 14.9538 69.8653 14.9538C72.2729 14.9538 73.8548 12.9887 73.8548 10.351C73.8548 7.76632 72.4274 5.8013 69.9513 5.8013C68.6959 5.8013 67.7675 6.36779 67.3892 6.98737V1.92432H65.1367V14.7414H67.355ZM71.5675 10.3687C71.5675 11.962 70.6391 12.8471 69.4698 12.8471C68.3178 12.8471 67.355 11.9443 67.355 10.3687C67.355 8.77539 68.3178 7.90795 69.4698 7.90795C70.6391 7.90795 71.5675 8.77539 71.5675 10.3687Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M75.1504 12.3693C75.1504 13.7325 76.2507 14.9894 78.0562 14.9894C79.3113 14.9894 80.1198 14.3875 80.5494 13.6971C80.5494 14.0334 80.584 14.5114 80.6354 14.7415H82.7332C82.6819 14.4406 82.6303 13.821 82.6303 13.3607V9.07656C82.6303 7.32395 81.6328 5.76611 78.9504 5.76611C76.6807 5.76611 75.4599 7.27084 75.3223 8.63399L77.3511 9.07656C77.4201 8.31533 77.9704 7.66033 78.9674 7.66033C79.9306 7.66033 80.3948 8.17371 80.3948 8.79332C80.3948 9.09427 80.2401 9.34213 79.7585 9.41293L77.6781 9.73158C76.2681 9.94403 75.1504 10.8115 75.1504 12.3693ZM78.5378 13.2368C77.7984 13.2368 77.4371 12.7411 77.4371 12.2277C77.4371 11.555 77.9013 11.2186 78.4862 11.1301L80.3948 10.8292V11.2186C80.3948 12.7588 79.5006 13.2368 78.5378 13.2368Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M84.2129 12.3162C84.3158 13.3076 85.1929 15.0071 87.7377 15.0071C89.9559 15.0071 91.0218 13.5554 91.0218 12.1392C91.0218 10.8646 90.1795 9.8201 88.5115 9.46601L87.3077 9.20048C86.8435 9.11197 86.5342 8.84643 86.5342 8.42155C86.5342 7.92585 87.0155 7.55411 87.6174 7.55411C88.5805 7.55411 88.9415 8.2091 89.0105 8.72252L90.9189 8.27994C90.8156 7.34167 90.0076 5.76611 87.6003 5.76611C85.7774 5.76611 84.4365 7.05843 84.4365 8.61627C84.4365 9.83778 85.1755 10.8469 86.8093 11.2186L87.927 11.4842C88.5805 11.6258 88.8384 11.9445 88.8384 12.3339C88.8384 12.7942 88.4773 13.2014 87.7206 13.2014C86.7232 13.2014 86.2248 12.5641 86.1731 11.8736L84.2129 12.3162Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M94.4955 9.39521C94.5472 8.59859 95.2007 7.67801 96.3871 7.67801C97.6938 7.67801 98.2442 8.52778 98.2787 9.39521H94.4955ZM98.5023 11.6612C98.227 12.4401 97.6424 12.9889 96.5763 12.9889C95.4413 12.9889 94.4955 12.1569 94.4442 11.0062H100.497C100.497 10.9708 100.531 10.6167 100.531 10.2804C100.531 7.48328 98.9665 5.76611 96.3527 5.76611C94.1862 5.76611 92.1914 7.57179 92.1914 10.3512C92.1914 13.2899 94.2375 15.0071 96.5591 15.0071C98.6396 15.0071 99.9809 13.7502 100.411 12.2454L98.5023 11.6612Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M11.5904 20.0194C11.0982 20.6567 10.1003 20.3075 10.0884 19.4937L9.91504 7.59082H17.6981C19.1078 7.59082 19.8941 9.26517 19.0175 10.4005L11.5904 20.0194Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M11.5904 20.0194C11.0982 20.6567 10.1003 20.3075 10.0884 19.4937L9.91504 7.59082H17.6981C19.1078 7.59082 19.8941 9.26517 19.0175 10.4005L11.5904 20.0194Z"
                  fill="#F5F5F3"
                />
                <path
                  d="M8.42449 0.866774C8.91666 0.229359 9.91459 0.578616 9.92645 1.39243L10.0024 13.2953H2.31677C0.906999 13.2953 0.120746 11.6209 0.997382 10.4856L8.42449 0.866774Z"
                  fill="#F5F5F3"
                />
              </g>
              <defs>
                <clipPath id="clip0_212_626">
                  <rect
                    width="100"
                    height="20"
                    fill="white"
                    transform="translate(0.625 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
