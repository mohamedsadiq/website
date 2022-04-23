import Link from 'next/link';

const WorkIntro = ({title, link}) =>{
    return(
        <div className="nav_work">
            <div>
                <h1>{title ? title: "Title"}</h1>
            </div>
            <div className="rel_parent pointer" >
                <Link href={link ? link: "Title"} passHref>
                    <svg  className="center_right" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillrule="evenodd" cliprule="evenodd" d="M18.3291 11.1014C19.2167 10.4985 20.3389 10.4867 21.1727 11.0342C21.362 11.1586 21.5642 11.3559 22.1048 11.8964C22.6453 12.437 22.8426 12.6392 22.967 12.8285C23.5145 13.6623 23.5027 14.7845 22.8998 15.6721C22.7621 15.8747 22.5491 16.0919 21.9888 16.6522L21.1768 17.4642C20.9206 17.7205 20.9206 18.1359 21.1768 18.3922C21.4331 18.6484 21.8485 18.6484 22.1048 18.3922L22.9167 17.5802L22.9731 17.5239L22.9731 17.5239C23.4582 17.0389 23.7686 16.7286 23.9853 16.4096C24.8714 15.1052 24.9172 13.4074 24.0639 12.1081C23.8558 11.7912 23.5525 11.4881 23.0913 11.027L23.0327 10.9685L22.9742 10.9099C22.5131 10.4487 22.21 10.1454 21.8931 9.93729C20.5938 9.08402 18.896 9.12977 17.5916 10.0159C17.2726 10.2326 16.9623 10.543 16.4773 11.0281L16.421 11.0845L15.609 11.8964C15.3528 12.1527 15.3528 12.5681 15.609 12.8244C15.8653 13.0806 16.2807 13.0806 16.537 12.8244L17.349 12.0124C17.9093 11.4521 18.1265 11.2391 18.3291 11.1014ZM12.8251 16.5363C13.0814 16.28 13.0814 15.8645 12.8251 15.6083C12.5689 15.352 12.1534 15.352 11.8972 15.6083L11.0852 16.4203L11.0289 16.4766L11.0289 16.4766C10.5438 16.9615 10.2334 17.2719 10.0166 17.5909C9.1305 18.8953 9.08476 20.5931 9.93802 21.8924C10.1461 22.2092 10.4494 22.5124 10.9106 22.9734L10.9692 23.032L11.0278 23.0906L11.0278 23.0906C11.4888 23.5518 11.792 23.8551 12.1088 24.0632C13.4081 24.9165 15.1059 24.8707 16.4103 23.9846C16.7294 23.7679 17.0397 23.4574 17.5246 22.9723L17.5247 22.9723L17.5809 22.916L18.3929 22.104C18.6492 21.8478 18.6492 21.4323 18.3929 21.1761C18.1367 20.9198 17.7212 20.9198 17.465 21.1761L16.653 21.988C16.0926 22.5484 15.8755 22.7614 15.6729 22.899C14.7853 23.502 13.663 23.5138 12.8292 22.9662C12.6399 22.8419 12.4377 22.6446 11.8972 22.104C11.3566 21.5635 11.1593 21.3613 11.035 21.172C10.4874 20.3382 10.4992 19.2159 11.1022 18.3283C11.2398 18.1257 11.4528 17.9086 12.0132 17.3482L12.8251 16.5363ZM19.7851 15.1439C20.0413 14.8876 20.0413 14.4721 19.7851 14.2159C19.5288 13.9596 19.1133 13.9596 18.8571 14.2159L14.2173 18.8557C13.961 19.112 13.961 19.5274 14.2173 19.7837C14.4735 20.0399 14.889 20.0399 15.1452 19.7837L19.7851 15.1439Z" fill="white"/>
                        <circle cx="17" cy="17" r="16.2273" stroke="white" strokewidth="1.54545"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default WorkIntro