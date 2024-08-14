import React, { useState } from 'react';

const styles = {
  container: "grid sm:grid-cols-2 mt-4 sm:mt-36 items-start gap-16 p-4 mx-auto max-w-4xl bg-transparent font-[sans-serif]",
  heading: "text-3xl font-extrabold text-[#17172e] dark:text-white",
  subHeading: "text-sm mt-4 text-[#17172e] dark:text-white",
  section: "mt-12",
  sectionHeading: "text-base font-bold text-[#17172e] dark:text-white",
  emailList: "mt-4",
  listItem: "flex items-center",
  iconContainer: "bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0",
  emailLink: "text-[#6265fb] text-sm ml-4",
  socialIcons: "flex mt-4 space-x-4",
  form: "ml-auto space-y-4",
  input: "w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-[#6265fb] ",
  textarea: "w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-[#6265fb] ",
  button: "text-white bg-[#6265fb] hover:bg-[#494bc7] transition tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className={styles.container}>
      <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="" data-aos-easing="ease-out">
        <h1 className={styles.heading}>Let's Talk</h1>
        <p className={styles.subHeading}>Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.</p>
        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Email</h2>
          <ul className={styles.emailList}>
            <li className={styles.listItem}>
              <div className={styles.iconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#6265fb' viewBox="0 0 479.058 479.058">
                  <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" data-original="#000000" />
                </svg>
              </div>
              <a href="javascript:void(0)" className={styles.emailLink}>
                <small className="block">Mail</small>
                <strong>info@example.com</strong>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Socials</h2>
          <ul className={styles.socialIcons}>
            <li className={styles.iconContainer}>
              <a href="javascript:void(0)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#6265fb' viewBox="0 0 24 24">
                  <path d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z" data-original="#000000" />
                </svg>
              </a>
            </li>
            <li className={styles.iconContainer}>
              <a href="javascript:void(0)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#6265fb' viewBox="0 0 511 512">
                  <path d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.398c8.281 0 15-6.715 15-15V309.379c.004-91.477-74.394-167.637-165.92-167.637zm-28.398 404H271.068V320.266c0-39.095-31.758-70.23-70.235-70.23-38.477 0-70.235 31.137-70.235 70.23V512H38.402V180.664h86.398V200c13.785-13.199 45.218-30.336 80.236-30.336h.016c63.285 0 115.812 46.41 125.195 109.403l.133.93c12.785-4.207 26.387-6.637 40.785-6.637 74.38 0 135.92 61.547 135.92 137.02V482h-66.398V320.266c0-39.093-31.758-70.23-70.234-70.23-38.477 0-70.235 31.137-70.235 70.23zm-100.101-26.832c0 8.285 6.715 15 15 15h96.406c8.281 0 15-6.715 15-15V497c0-8.285-6.719-15-15-15h-96.406c-8.285 0-15 6.715-15 15zm-175.133-56.77c0 8.281 6.715 15 15 15h96.406c8.281 0 15-6.719 15-15V175.664c0-8.281-6.719-15-15-15h-96.406c-8.285 0-15 6.719-15 15zm30.133 0h66.398V190.664h-66.398z" data-original="#000000" />
                </svg>
              </a>
            </li>
            <li className={styles.iconContainer}>
              <a href="javascript:void(0)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#6265fb' viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.39-1.832.656-2.825.775a4.916 4.916 0 0 0 2.163-2.723 9.746 9.746 0 0 1-3.1 1.184 4.902 4.902 0 0 0-8.351 4.455A13.905 13.905 0 0 1 1.671 3.149a4.897 4.897 0 0 0-.662 2.465c0 1.703.867 3.205 2.188 4.085a4.902 4.902 0 0 1-2.22-.616v.06c0 2.379 1.692 4.356 3.937 4.805-.413.112-.849.171-1.296.171-.317 0-.626-.03-.929-.087.627 1.956 2.444 3.379 4.599 3.419a9.81 9.81 0 0 1-7.277 2.031A13.835 13.835 0 0 0 7.548 21.5c8.99 0 13.899-7.458 13.899-13.917 0-.21-.005-.423-.014-.635a9.905 9.905 0 0 0 2.436-2.548l-.015-.01z" data-original="#000000" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.form} data-aos="fade-down" data-aos-duration="500" data-aos-delay="" data-aos-easing="ease-out">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className={styles.input}
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Message"
          className={styles.textarea}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
