// function avatarGitHub(_link) {
//   let link;
//   for (let i = 0; i <= 8; i++) {
//     const replace = _link.replace(".", `${[i]}.`);

//     link += ` "${replace}",`;
//   }
//   return `"${_link}", ` + link.replace("undefined ", "");
// }

// const links = avatarGitHub("avatars.githubusercontent.com");

module.exports = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "avatars0.githubusercontent.com",
      "avatars1.githubusercontent.com",
      "avatars2.githubusercontent.com",
      "avatars3.githubusercontent.com",
      "avatars4.githubusercontent.com",
      "avatars5.githubusercontent.com",
      "avatars6.githubusercontent.com",
      "avatars7.githubusercontent.com",
      "avatars8.githubusercontent.com",
    ],
  },
};
