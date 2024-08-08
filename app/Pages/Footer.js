"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const privacyPolicyContent = `
  1. Data Collection: We collect, use, and share your personal information in accordance with our Privacy Policy. By using our Services, you consent to our collection and use of your data as outlined in our Privacy Policy.
  2. Data Security: We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, we cannot guarantee the absolute security of your data.
  3. Third-Party Services: Our Services may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services
  `;

  const termsConditionsContent = `
  Terms and Conditions
  Introduction
  Welcome to Homenetics: ("we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our home automation services, mobile application, and website (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our Services.
  1. Use of Services
  1.1 Eligibility: You must be at least 14 years old to use our Services. By using our Services, you represent and warrant that you are at least 14 years old.
  1.2 Account Registration: To access certain features of our Services, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
  1.3 Account Security: You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
  1.4 User Responsibility: You agree to use the Services only for lawful purposes and in accordance with these Terms. You are responsible for any activity that occurs through your account, including any content you submit or post.
  1.5 Software Updates: We may provide updates to the software that powers our Services from time to time. These updates may include bug fixes, new features, or other improvements to enhance the functionality and security of our Services.
  2. Privacy
  2.1 Data Collection: We collect, use, and share your personal information in accordance with our Privacy Policy. By using our Services, you consent to our collection and use of your data as outlined in our Privacy Policy.
  2.2 Data Security: We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, we cannot guarantee the absolute security of your data.
  2.3 Third-Party Services: Our Services may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
  3. User Conduct
  3.1 Prohibited Activities: You agree not to use the Services for any unlawful or prohibited activities, including but not limited to:
  Violating any applicable laws or regulations.
  Interfering with or disrupting the Services or servers or networks connected to the Services.
  Impersonating any person or entity or falsely stating or otherwise misrepresenting your affiliation with a person or entity.
  Engaging in any activity that could harm or potentially harm the Services or the reputation of Homenetics.
  4. Intellectual Property
  4.1 Ownership: All content, trademarks, and other intellectual property on the Services are the property of Homenetics or its licensors. You agree not to use, reproduce, or distribute any such content without our express written permission.
  4.2 License: Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Services for your personal, non-commercial use.
  4.3 Feedback: If you provide us with any feedback or suggestions regarding the Services, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such feedback or suggestions in any form.
  5. Disclaimers and Limitation of Liability
  5.1 Disclaimer: The Services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Services will be uninterrupted or error-free.
  5.2 Limitation of Liability: To the fullest extent permitted by law, Homenetics shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
  (a) Your use or inability to use the Services;
  (b) Any unauthorized access to or use of our servers and/or any personal information stored therein;
  (c) Any interruption or cessation of transmission to or from the Services;
  (d) Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Services by any third party;
  (e) Any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available via the Services.
  5.3 Aggregate Liability: Our aggregate liability arising out of or relating to these Terms or the Services will not exceed the greater of eight thousand rupees (Rs 8000) or the amount you have paid us in the past twelve months.
  6. Indemnification
  You agree to indemnify, defend, and hold harmless Homenetics, its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, fees (including reasonable attorneys' fees) that they may incur as a result of or arising from your use of the Services or your violation of these Terms.
  7. Termination
  7.1 Termination by You: You may terminate your account at any time by contacting us at Homenetics_Official@homenetics.in.
  7.2 Termination by Us: We may terminate or suspend your account and access to the Services at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users of the Services, us, or third parties, or for any other reason.
  7.3 Effect of Termination: Upon termination of your account, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
  8. Governing Law
  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located in India/Punjab for the purpose of litigating all such claims or disputes.
  9. Dispute Resolution
  9.1 Informal Resolution: Before filing a claim against us, you agree to try to resolve the dispute informally by contacting us at Homenetics_Official@homenetics.in. We will attempt to resolve the dispute informally by contacting you via email. If a dispute is not resolved within 30 days of submission, either party may bring a formal proceeding.
  9.2 Arbitration: Any disputes arising out of or relating to these Terms or the Services shall be resolved through binding arbitration conducted by the Judicial Court in accordance with its rules. The arbitration shall take place in Zirakpur, Punjab, unless otherwise agreed by the parties. The arbitrator’s decision shall be binding and may be entered as a judgment in any court of competent jurisdiction.
  10. Changes to Terms
  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
  11. Miscellaneous
  11.1 Entire Agreement: These Terms constitute the entire agreement between you and us regarding the use of the Services and supersede any prior agreements between you and us relating to such subject matter.
  11.2 Severability: If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable.
  11.3 Waiver: No waiver of any term of these Terms will be deemed a further or continuing waiver of such term or any other term, and our failure to assert any right or provision under these Terms will not constitute a waiver of such right or provision.
  11.4 Assignment: You may not assign these Terms or any of your rights or obligations hereunder, without our prior written consent. Any attempted assignment in violation of these Terms will be null and void.
  12. Contact Us
  If you have any questions about these Terms, please contact us at Homenetics_Official@homenetics.in. By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
  `;

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <motion.footer
      className="text-white w-full bg-sky-500 mt-[5rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto py-16 px-4 md:px-8">
        <motion.div
          className="flex flex-row justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.a
            className="text-white p-3 hover:shadow-pink-200 transition duration-300 cursor-pointer"
            onClick={() => openModal(privacyPolicyContent)}
            whileHover={{ scale: 1.1 }}
          >
            <p className="underline m-2 p-2">Privacy Policy</p>
          </motion.a>
          <motion.a
            className="text-white p-3 hover:shadow-pink-200 transition duration-300 cursor-pointer"
            onClick={() => openModal(termsConditionsContent)}
            whileHover={{ scale: 1.1 }}
          >
            <p className="underline m-2 p-2">Terms & Conditions</p>
          </motion.a>
        </motion.div>
        <motion.div
          className="flex flex-row align-middle justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.a
            href="https://www.instagram.com/homenetics_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 hover:shadow-pink-200 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <BsInstagram />
          </motion.a>
          <motion.a
            href="https://github.com/homiesTech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 hover:shadow-pink-200 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <BsGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/company/homenetics-technology-pvt-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 hover:shadow-pink-200 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <BsLinkedin />
          </motion.a>
          <motion.a
            href="mailto:Homenetics_Official@homenetics.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 hover:shadow-pink-200 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <IoMdMail />
          </motion.a>
          <motion.a
            href="tel:+9518499946"
            className="text-white p-3 hover:shadow-pink-200 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <BsFillTelephoneFill />
          </motion.a>
        </motion.div>
        <motion.div
          className="text-center text-white text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          &copy; 2024 Homenetics. All rights reserved.
        </motion.div>
      </div>

      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-lg p-8 max-w-lg w-full max-h-[70vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-black">
              {modalContent === privacyPolicyContent
                ? "Privacy Policy"
                : "Terms & Conditions"}
            </h2>
            <div className="text-black whitespace-pre-wrap">{modalContent}</div>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-sky-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </motion.footer>
  );
};

export default Footer;
