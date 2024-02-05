import React, { useState, useEffect, useRef } from 'react';
import { BsThreeDots } from "react-icons/bs";
import router from 'next/router';
import Image from "next/image";
import {
  UpdateCourseStatus,
  DeleteCourseStatus
} from "../../service/Apis/api";
interface AdminGridProps {
  title: string;
  count: number;
  date: string;
  imageUrl: any;
  courseId: string;
  course_status: string;
}

const AdminGrid: React.FC<AdminGridProps> = ({ title, count, date, imageUrl, courseId, course_status }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOptions = ["Edit Details", "Preview", "Deleted", "Pause", "Draft", "Active"];
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Function to close the menu when clicking outside the menu div
  const closeMenu = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      // alert("aefs");
      // console.log("Clicked outside menu. Closing menu.");
      toggleMenu();
    }
  };
  // Add a click event listener to the document when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [menuOpen]);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuOptionClick = async (option: string) => {
    switch (option) {
        case "Edit Details":
            localStorage.setItem("courseId", courseId);
            router.push(`/admin_course_add?courseId=${courseId}`);
        break;
        case "Preview":
            router.push(`/course?course=${courseId}`);
        break;
        case "Deleted":
            // Handle Delete action
            await DeleteCourseStatus(courseId);
            router.reload();
        break;
        case "Pause":
            await UpdateCourseStatus(courseId,'PAUSE');
            router.reload();
        break;
        case "Draft":
            await UpdateCourseStatus(courseId,'DRAFT');
            router.reload();
        break;
        case "Active":
            await UpdateCourseStatus(courseId,'ACTIVE');
            router.reload();
        break;
    }

    // Close the menu after the action is performed
    setMenuOpen(false);
};

  return (
    
    <div className="admin_card bg-white rounded-3xl shadow-md p-4 my-4">
      <div className="admin_card_content relative" >
        <div className="admin_card_img overflow-hidden rounded-[16px] w-24 h-24">
          <img src={imageUrl} alt="Admin Image" width="100" height="100" />
        </div>
        <div className={`admin_card_menu absolute top-0 right-0 rounded-[25px] py-2 px-2 ${menuOpen ? 'open' : ''}`} ref={menuRef}>
          <div onClick={toggleMenu} className="cursor-pointer">
            <BsThreeDots />
          </div>
          {menuOpen && (
                    <div className="menu-options absolute text-center right-100 p-2" >
                        {menuOptions.map((option, index) => (
                            ((course_status == 'DRAFT' && option != 'Draft') || (course_status == 'ACTIVE' && option != 'Active') || (course_status == 'PAUSE' && option != 'Pause') ?
                                <div className="cursor-pointer" key={`option-${index}`} onClick={() => handleMenuOptionClick(option)}>{option}</div>
                            :
                                <></>
                            )                            
                        ))}
                    </div>
                )}
        </div>
        <div className="admin_card_detail flex flex-col gap-8">
          <h4 className="text-base font-semibold mr-8">{title}</h4>
          <div className="admin_card_extra flex gap-2 items-center">
            <div className="admin_card_count font-medium text-[10px] text-707BA0 flex items-center bg-EDF5FE rounded-xl px-2 py-1">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.10666 8.03768C8.03999 8.03102 7.95999 8.03102 7.88666 8.03768C6.29999 7.98435 5.03999 6.68435 5.03999 5.08435C5.03999 3.45102 6.35999 2.12435 7.99999 2.12435C9.63333 2.12435 10.96 3.45102 10.96 5.08435C10.9533 6.68435 9.69333 7.98435 8.10666 8.03768Z" stroke="#707BA0" stroke-width="1.3" strokeLinejoin="round"  />
                <path d="M4.77334 10.4977C3.16001 11.5777 3.16001 13.3377 4.77334 14.411C6.60667 15.6377 9.61334 15.6377 11.4467 14.411C13.06 13.331 13.06 11.571 11.4467 10.4977C9.62001 9.27768 6.61334 9.27768 4.77334 10.4977Z" stroke="#707BA0" stroke-width="1.3" strokeLinejoin="round"  />
              </svg>&nbsp;
              {count}</div>
            <div className="admin_card_date font-medium text-[10px] text-707BA0 flex items-center bg-EDF5FE rounded-xl px-2 py-1">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.33333 2.12435V4.12435" stroke="#707BA0" stroke-width="1.3" strokeMiterlimit="10" strokeLinejoin="round"  />
                <path d="M10.6667 2.12435V4.12435" stroke="#707BA0" stroke-width="1.3" strokeMiterlimit="10" strokeLinejoin="round"  />
                <path d="M2.33333 6.85101H13.6667" stroke="#707BA0" stroke-width="1.3" strokeMiterlimit="10" strokeLinejoin="round" />
                <path d="M14 6.45768V12.1243C14 14.1243 13 15.4577 10.6667 15.4577H5.33333C3 15.4577 2 14.1243 2 12.1243V6.45768C2 4.45768 3 3.12435 5.33333 3.12435H10.6667C13 3.12435 14 4.45768 14 6.45768Z" stroke="#707BA0" stroke-width="1.3" strokeMiterlimit="10" strokeLinejoin="round"  />
                <path d="M7.99698 9.92436H8.00297" stroke="#707BA0" stroke-width="1.3" strokeLinejoin="round"  />
                <path d="M5.52955 9.92436H5.53553" stroke="#707BA0" stroke-width="1.3" strokeLinejoin="round"  />
                <path d="M5.52955 11.9244H5.53553" stroke="#707BA0" stroke-width="1.3" strokeLinejoin="round"  />
              </svg>&nbsp;
              {date}</div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AdminGrid;
