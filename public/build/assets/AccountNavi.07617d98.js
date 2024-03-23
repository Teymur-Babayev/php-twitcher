import{b as n,a as e,j as d,L as o}from"./app.9e598114.js";import{_ as r}from"./Translate.dc83ae5b.js";import{a as s}from"./index.esm.c83823d4.js";import"./iconBase.4930b98a.js";function x({active:i}){const{auth:t}=n().props;return e("div",{className:"lg:w-80 hidden lg:block lg:flex-shrink-0",children:d("div",{className:" bg-white rounded shadow dark:bg-zinc-900",children:[e(o,{className:"block",href:`${t.user.is_streamer==="yes"?route("payout.withdraw"):route("profile.myTokens")}`,children:d("span",{className:"flex items-center bg-indigo-100 text-indigo-700 text-sm font-bold justify-center py-5 mb-3 rounded-t",children:[e(s,{className:"h-5 w-5 mr-1"}),r(":tokensCount tokens",{tokensCount:t.user.tokens})]})}),t.user.is_streamer==="yes"&&e(o,{className:`block font-bold ${i=="account"?"text-indigo-900":"text-indigo-600"} hover:text-indigo-800 py-2 dark:text-white dark:hover:text-indigo-300  dark:border-zinc-800 border-b border-indigo-100 my-2 px-5`,href:route("channel",{user:t.user.username}),children:r("My Channel")}),t.user.is_streamer==="yes"&&e(o,{className:`block font-bold ${i=="channel-settings"?"text-indigo-900":"text-indigo-600"} hover:text-indigo-800 py-2 dark:text-white dark:hover:text-indigo-300  dark:border-zinc-800 border-b border-indigo-100 my-2 px-5`,href:route("channel.settings"),children:r("Channel Settings")}),d(o,{className:`block font-bold ${i=="notifications"?"text-indigo-900":"text-indigo-600"} hover:text-indigo-800 py-2 dark:text-white dark:hover:text-indigo-300  dark:border-zinc-800 border-b border-indigo-100 my-2 px-5`,href:route("notifications.inbox"),children:[r("Notifications"),e("span",{className:"bg-red-100 text-red-500 text-xs font-medium ml-2 px-1.5 py-0.5 rounded-full dark:bg-red-500 dark:text-red-100",children:r(":unreadNotificationsCount new",{unreadNotificationsCount:t.unreadNotifications})})]}),t.user.is_streamer==="yes"&&e(o,{className:`block font-bold ${i=="withdraw"?"text-indigo-900":"text-indigo-600"} hover:text-indigo-800 py-2 dark:text-white dark:hover:text-indigo-300  dark:border-zinc-800 border-b border-indigo-100 my-2 px-5`,href:route("payout.withdraw"),children:r("Withdraw")}),t.user.is_streamer==="yes"&&e(o,{className:`block font-bold ${i=="tiers"?"text-indigo-900":"text-indigo-600"} hover:text-indigo-800 py-2 dark:text-white dark:hover:text-indigo-300  dark:border-zinc-800 border-b border-indigo-100 my-2 px-5`,href:route("membership.set-tiers"),children:r("Membership Tiers")}),t.user.is_streamer==="yes"&&e(o,{className:`block font-bold ${i=="upload-videos"?"text-indigo-900":"text-indigo-600"} hover:text-indigo-800 py-2 dark:text-white dark:hover:text-indigo-300  dark:border-zinc-800 border-b border-indigo-100 my-2 px-5`,href:route("videos.list"),children:r("Upload Videos")}),e(o,{className:`block font-bold ${i=="videos"?"text-indigo-900":"text-indigo-600"} hover:text-indigo-800 py-2 dark:text-white dark:hover:text-indigo-300  dark:border-zinc-800 border-b border-indigo-100 my-2 px-5`,href:route("videos.ordered"),children:r("My Videos")}),t.user.is_streamer==="yes"&&e(o,{className:`block font-bold ${i=="followers"?"text-indigo-900":"text-indigo-600"} hover:text-indigo-800 py-2 dark:text-white dark:hover:text-indigo-300  dark:border-zinc-800 border-b border-indigo-100 my-2 px-5`,href:route("channel.followers",{user:t.user.username}),children:r("My Followers")}),t.user.is_streamer==="yes"&&e(o,{className:`block font-bold ${i=="my-subscribers"?"text-indigo-900":"text-indigo-600"} hover:text-indigo-800 py-2 dark:text-white dark:hover:text-indigo-300  dark:border-zinc-800 border-b border-indigo-100 my-2 px-5`,href:route("mySubscribers"),children:r("My Subscribers")}),e(o,{className:`block font-bold ${i=="following"?"text-indigo-900":"text-indigo-600"} hover:text-indigo-800 py-2 dark:text-white dark:hover:text-indigo-300  dark:border-zinc-800 border-b border-indigo-100 my-2 px-5`,href:route("profile.followings"),children:r("My Followings")}),e(o,{className:`block font-bold ${i=="my-subscriptions"?"text-indigo-900":"text-indigo-600"} hover:text-indigo-800 py-2 dark:text-white dark:hover:text-indigo-300  dark:border-zinc-800 border-b border-indigo-100 my-2 px-5`,href:route("mySubscriptions"),children:r("My Subscriptions")}),t.user.is_streamer==="yes"&&e(o,{className:`block font-bold ${i=="channel-settings"?"text-indigo-900":"text-indigo-600"} hover:text-indigo-800 py-2 dark:text-white dark:hover:text-indigo-300  dark:border-zinc-800 border-b border-indigo-100 my-2 px-5`,href:route("channel.bannedUsers"),children:r("Banned Users")}),e(o,{className:`block font-bold ${i=="account"?"text-indigo-900":"text-indigo-600"} hover:text-indigo-800 py-2 dark:text-white dark:hover:text-indigo-300  dark:border-zinc-800 border-b border-indigo-100 my-2 px-5`,href:route("profile.edit"),children:r("My Account")})]})})}export{x as default};
