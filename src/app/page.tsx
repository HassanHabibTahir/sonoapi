'use client'
import Image from "next/image";
import styles from "./page.module.css";
import React, { useEffect } from "react";
import Cookies from 'js-cookie';
const token = '_cfuvid=gsZOhePWOjuFdbUVmYdpqegiKgws_B7S47sO0vs2OXk-1720346902711-0.0.1.1-604800000; mp_26ced217328f4737497bd6ba6641ca1c_mixpanel=%7B%22distinct_id%22%3A%20%22%24device%3A1908caa54b3563f-067a26d6da8a8c-26001f51-144000-1908caa54b3563f%22%2C%22%24device_id%22%3A%20%221908caa54b3563f-067a26d6da8a8c-26001f51-144000-1908caa54b3563f%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fsuno.gcui.art%2F%22%2C%22%24initial_referring_domain%22%3A%20%22suno.gcui.art%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fsuno.gcui.art%2F%22%2C%22%24initial_referring_domain%22%3A%20%22suno.gcui.art%22%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24search_engine%22%3A%20%22google%22%7D; __cf_bm=4BdE2hGN_EDjqdXq5Gl5OPzlIq0cv_6bqJTeVBRseMI-1720348049-1.0.1.1-HIuaMytpBUxT_2RM1IAYq.duuRfqau2Sq71cDCgoLx7bt_YnVa0BAZDWBR7LIW7JZ9Clq3tnNwLd2AW9kFZHqA; ajs_anonymous_id=b72ce3a8-7efe-4010-8625-366ed30e3017; __client=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsaWVudF8yaXVsQ1ZsWUlqeHljWmV0SlprUmVnTHBaYzAiLCJyb3RhdGluZ190b2tlbiI6IjhqMnN0cTlvNjN5eG90bzlvenVpMWxiZDMya2gxYTZqbW1rNWpvdnYifQ.cVYBjxNVRaBv_pyYu3fEoB7FNt8iDu-4iTMwFpc-vBLHYxNEJOl0_G9TsZ0_NVH03bdfKYhLTl73CqCysxikUJtFVwqTNFiaBgQF2Cwd4WepwrKya831eZjMl1WdFZ7DkJ0pFVasqZTUtl6zOCCdUpLAdAG9K2s0s3QqeMZnral45Krs1yewostM_1cwwUFT_NI5J7Ez1OyrjFaaSCXUpyIK9n7OjrcWO_6leFmTjisZPLz1ovaEux6RaU8xoqWCtiOGmSCQNk2EZBlnznF3rh-Eyd8-rQCYI3VngrHO5xTfHkRJG3G_1Y3xT3jowU-GKVb6fQY4HI0Vfg8RbB9_0A; __client_uat=1720348338';
export default function Home() {
useEffect(()=>{
  Cookies.set('Cookie',token,{secure: true});
//     Cookies.set("Cookie", "_cfuvid=gsZOhePWOjuFdbUVmYdpqegiKgws_B7S47sO0vs2OXk-1720346902711-0.0.1.1-604800000; mp_26ced217328f4737497bd6ba6641ca1c_mixpanel=%7B%22distinct_id%22%3A%20%22%24device%3A1908caa54b3563f-067a26d6da8a8c-26001f51-144000-1908caa54b3563f%22%2C%22%24device_id%22%3A%20%221908caa54b3563f-067a26d6da8a8c-26001f51-144000-1908caa54b3563f%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fsuno.gcui.art%2F%22%2C%22%24initial_referring_domain%22%3A%20%22suno.gcui.art%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fsuno.gcui.art%2F%22%2C%22%24initial_referring_domain%22%3A%20%22suno.gcui.art%22%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24search_engine%22%3A%20%22google%22%7D; __cf_bm=4BdE2hGN_EDjqdXq5Gl5OPzlIq0cv_6bqJTeVBRseMI-1720348049-1.0.1.1-HIuaMytpBUxT_2RM1IAYq.duuRfqau2Sq71cDCgoLx7bt_YnVa0BAZDWBR7LIW7JZ9Clq3tnNwLd2AW9kFZHqA; ajs_anonymous_id=b72ce3a8-7efe-4010-8625-366ed30e3017; __client=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsaWVudF8yaXVsQ1ZsWUlqeHljWmV0SlprUmVnTHBaYzAiLCJyb3RhdGluZ190b2tlbiI6IjhqMnN0cTlvNjN5eG90bzlvenVpMWxiZDMya2gxYTZqbW1rNWpvdnYifQ.cVYBjxNVRaBv_pyYu3fEoB7FNt8iDu-4iTMwFpc-vBLHYxNEJOl0_G9TsZ0_NVH03bdfKYhLTl73CqCysxikUJtFVwqTNFiaBgQF2Cwd4WepwrKya831eZjMl1WdFZ7DkJ0pFVasqZTUtl6zOCCdUpLAdAG9K2s0s3QqeMZnral45Krs1yewostM_1cwwUFT_NI5J7Ez1OyrjFaaSCXUpyIK9n7OjrcWO_6leFmTjisZPLz1ovaEux6RaU8xoqWCtiOGmSCQNk2EZBlnznF3rh-Eyd8-rQCYI3VngrHO5xTfHkRJG3G_1Y3xT3jowU-GKVb6fQY4HI0Vfg8RbB9_0A; __client_uat=1720348338", { 
//       domain: 'suno.gcui.art',
//       path: '/',
//       maxAge: 315360000, // 10 years in seconds
//       secure: true,
//       sameSite: 'Lax'
//     });
//   // Output: undefined
},[])
const clickHandler = async () => {
  const cookieHeader = Cookies.get("Cookie");
  if (!cookieHeader) {
    console.error("No cookie found");
    return;
  }
  try {
    const response = await fetch("https://suno.gcui.art/api/get_limit", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `Cookie=${cookieHeader}`, 
      },
      credentials: "include", 
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        
          <code className={styles.code}>suno api</code>
        </p>  
      <button onClick={clickHandler}>Cookies</button>
      </div>

  
    </main>
  );
}
