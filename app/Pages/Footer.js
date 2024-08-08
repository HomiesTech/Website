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
    <h3 class="text-lg font-semibold mb-2 text-sky-500">Privacy Policy</h3>
    <p class="mb-4">Your privacy is important to us. This privacy statement explains the personal data our company processes, how our company processes it, and for what purposes.</p>
    <h4 class="text-base font-semibold mt-4 mb-2 text-sky-500">Information We Collect</h4>
    <ul class="list-disc ml-5">
      <li class="mb-2">Personal information such as name, email, and phone number.</li>
      <li class="mb-2">Usage data such as pages visited, time spent on pages, and other analytics.</li>
    </ul>
    <h4 class="text-base font-semibold mt-4 mb-2 text-sky-500">How We Use Your Information</h4>
    <p class="mb-4">We use the information we collect for various purposes, including to provide and maintain our service, notify you about changes, and improve our service.</p>
  `;
  const termsConditionsContent = `
  <h2 class="text-lg font-semibold mb-4 text-sky-500 ">Terms and Conditions</h2>
  <p class="mb-4">Welcome to Homenetics: ("we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our home automation services, mobile application, and website (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our Services.</p>

  <h4 class="text-base font-semibold mb-2 text-sky-500">1. Use of Services</h4>
  <p class="mb-2"><strong>1.1 Eligibility:</strong> You must be at least 14 years old to use our Services. By using our Services, you represent and warrant that you are at least 14 years old.</p>
  <p class="mb-2"><strong>1.2 Account Registration:</strong> To access certain features of our Services, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
  <p class="mb-2"><strong>1.3 Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
  <p class="mb-4"><strong>1.4 User Responsibility:</strong> You agree to use the Services only for lawful purposes and in accordance with these Terms. You are responsible for any activity that occurs through your account, including any content you submit or post.</p>

  <h4 class="text-base font-semibold mb-2 text-sky-500">2. Privacy</h4>
  <p class="mb-2"><strong>2.1 Data Collection:</strong> We collect, use, and share your personal information in accordance with our Privacy Policy. By using our Services, you consent to our collection and use of your data as outlined in our Privacy Policy.</p>
  <p class="mb-4"><strong>2.2 Data Security:</strong> We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, we cannot guarantee the absolute security of your data.</p>

  <h4 class="text-base font-semibold mb-2 text-sky-500">3. User Conduct</h4>
  <ul class="list-disc ml-5 mb-4">
    <li class="mb-2"><strong>Prohibited Activities:</strong> You agree not to use the Services for any unlawful or prohibited activities, including but not limited to:</li>
    <li class="mb-2">Violating any applicable laws or regulations.</li>
    <li class="mb-2">Interfering with or disrupting the Services or servers or networks connected to the Services.</li>
    <li class="mb-2">Impersonating any person or entity or falsely stating or otherwise misrepresenting your affiliation with a person or entity.</li>
    <li class="mb-2">Engaging in any activity that could harm or potentially harm the Services or the reputation of Homenetics.</li>
  </ul>

  <h4 class="text-base font-semibold mb-2 text-sky-500">4. Intellectual Property</h4>
  <p class="mb-4"><strong>4.1 Ownership:</strong> All content, trademarks, and other intellectual property on the Services are the property of Homenetics or its licensors. You agree not to use, reproduce, or distribute any such content without our express written permission.</p>
  <p class="mb-4"><strong>4.2 License:</strong> Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Services for your personal, non-commercial use.</p>

  <h4 class="text-base font-semibold mb-2 text-sky-500">5. Disclaimers and Limitation of Liability</h4>
  <p class="mb-4"><strong>5.1 Disclaimer:</strong> The Services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Services will be uninterrupted or error-free.</p>
  <p class="mb-4"><strong>5.2 Limitation of Liability:</strong> To the fullest extent permitted by law, Homenetics shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:</p>
  <ul class="list-decimal ml-5 mb-4">
    <li class="mb-2">Your use or inability to use the Services;</li>
    <li class="mb-2">Any unauthorized access to or use of our servers and/or any personal information stored therein;</li>
    <li class="mb-2">Any interruption or cessation of transmission to or from the Services;</li>
    <li class="mb-2">Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Services by any third party;</li>
    <li class="mb-2">Any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available via the Services.</li>
  </ul>

  <h4 class="text-base font-semibold mb-2 text-sky-500">6. Indemnification</h4>
  <p class="mb-4">You agree to indemnify, defend, and hold harmless Homenetics, its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, fees (including reasonable attorneys' fees) that they may incur as a result of or arising from your use of the Services or your violation of these Terms.</p>

  <h4 class="text-base font-semibold mb-2 text-sky-500">7. Termination</h4>
  <p class="mb-4"><strong>7.1 Termination by You:</strong> You may terminate your account at any time by contacting us at Homenetics_Official@homenetics.in.</p>
  <p class="mb-4"><strong>7.2 Termination by Us:</strong> We may terminate or suspend your account and access to the Services at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users of the Services, us, or third parties, or for any other reason.</p>

  <h4 class="text-base font-semibold mb-2 text-sky-500">8. Governing Law</h4>
  <p class="mb-4">These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located in India/Punjab for the purpose of litigating all such claims or disputes.</p>

  <h4 class="text-base font-semibold mb-2 text-sky-500">9. Dispute Resolution</h4>
  <p class="mb-4"><strong>9.1 Informal Resolution:</strong> Before filing a claim against us, you agree to try to resolve the dispute informally by contacting us at Homenetics_Official@homenetics.in. We will attempt to resolve the dispute informally by contacting you via email. If a dispute is not resolved within 30 days of submission, either party may bring a formal proceeding.</p>

  <h4 class="text-base font-semibold mb-2 text-sky-500">10. Changes to Terms</h4>
  <p class="mb-4">We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

  <h4 class="text-base font-semibold mb-2 text-sky-500">11. Miscellaneous</h4>
  <p class="mb-4"><strong>11.1 Entire Agreement:</strong> These Terms constitute the entire agreement between you and us regarding the use of the Services and supersede any prior agreements between you and us relating to such subject matter.</p>
  <p class="mb-4"><strong>11.2 Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable.</p>
  <p class="mb-4"><strong>11.3 Waiver:</strong> No waiver of any term of these Terms will be deemed a further or continuing waiver of such term or any other term, and our failure to assert any right or provision under these Terms will not constitute a waiver of such right or provision.</p>

  <h4 class="text-base font-semibold mb-2 text-sky-500">12. Contact Us</h4>
  <p class="mb-4">If you have any questions about these Terms, please contact us at Homenetics_Official@homenetics.in. By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
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
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white  rounded-lg p-8 max-w-lg w-full max-h-[70vh] overflow-y-auto ">
            <div
              className="text-black"
              dangerouslySetInnerHTML={{ __html: modalContent }}
            />
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
