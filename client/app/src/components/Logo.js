// libs
import React from 'react';
import { withStyles } from '@material-ui/core';

// modules
import { immerHistory } from '@app/modules/store';

const styles = theme => ({
  root: {
    cursor: 'pointer',
  },
});

const Logo = props => {
  const { classes } = props;

  const handleLogoClick = e => {
    immerHistory.push('/');
  };

  return (
    <svg className={classes.root} onClick={handleLogoClick} width="201" height="54" viewBox="0 0 201 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <path d="M42.16 21.76H49.24L54.13 35.62H54.19L59.11 21.76H66.16V43H61.48V26.71H61.42L55.84 43H52.27L46.9 26.71H46.84V43H42.16V21.76ZM68.4801 35.71C68.4801 34.55 68.6901 33.5 69.1101 32.56C69.5301 31.62 70.1001 30.82 70.8201 30.16C71.5601 29.48 72.4201 28.96 73.4001 28.6C74.4001 28.24 75.4601 28.06 76.5801 28.06C77.7001 28.06 78.7501 28.24 79.7301 28.6C80.7301 28.96 81.5901 29.48 82.3101 30.16C83.0501 30.82 83.6301 31.62 84.0501 32.56C84.4701 33.5 84.6801 34.55 84.6801 35.71C84.6801 36.87 84.4701 37.92 84.0501 38.86C83.6301 39.8 83.0501 40.61 82.3101 41.29C81.5901 41.95 80.7301 42.46 79.7301 42.82C78.7501 43.18 77.7001 43.36 76.5801 43.36C75.4601 43.36 74.4001 43.18 73.4001 42.82C72.4201 42.46 71.5601 41.95 70.8201 41.29C70.1001 40.61 69.5301 39.8 69.1101 38.86C68.6901 37.92 68.4801 36.87 68.4801 35.71ZM72.9801 35.71C72.9801 36.81 73.2901 37.7 73.9101 38.38C74.5501 39.06 75.4401 39.4 76.5801 39.4C77.7201 39.4 78.6001 39.06 79.2201 38.38C79.8601 37.7 80.1801 36.81 80.1801 35.71C80.1801 34.61 79.8601 33.72 79.2201 33.04C78.6001 32.36 77.7201 32.02 76.5801 32.02C75.4401 32.02 74.5501 32.36 73.9101 33.04C73.2901 33.72 72.9801 34.61 72.9801 35.71ZM84.9006 28.42H89.7606L93.4506 38.32H93.5106L96.9306 28.42H101.461L95.7006 43H90.9306L84.9006 28.42ZM102.261 28.42H106.761V43H102.261V28.42ZM101.901 23.83C101.901 23.11 102.151 22.5 102.651 22C103.171 21.48 103.791 21.22 104.511 21.22C105.231 21.22 105.841 21.48 106.341 22C106.861 22.5 107.121 23.11 107.121 23.83C107.121 24.55 106.861 25.17 106.341 25.69C105.841 26.19 105.231 26.44 104.511 26.44C103.791 26.44 103.171 26.19 102.651 25.69C102.151 25.17 101.901 24.55 101.901 23.83ZM122.894 40.48C122.174 41.4 121.264 42.11 120.164 42.61C119.064 43.11 117.924 43.36 116.744 43.36C115.624 43.36 114.564 43.18 113.564 42.82C112.584 42.46 111.724 41.95 110.984 41.29C110.264 40.61 109.694 39.8 109.274 38.86C108.854 37.92 108.644 36.87 108.644 35.71C108.644 34.55 108.854 33.5 109.274 32.56C109.694 31.62 110.264 30.82 110.984 30.16C111.724 29.48 112.584 28.96 113.564 28.6C114.564 28.24 115.624 28.06 116.744 28.06C117.784 28.06 118.724 28.24 119.564 28.6C120.424 28.96 121.144 29.48 121.724 30.16C122.324 30.82 122.784 31.62 123.104 32.56C123.424 33.5 123.584 34.55 123.584 35.71V37.12H113.144C113.324 37.98 113.714 38.67 114.314 39.19C114.914 39.69 115.654 39.94 116.534 39.94C117.274 39.94 117.894 39.78 118.394 39.46C118.914 39.12 119.364 38.69 119.744 38.17L122.894 40.48ZM119.084 34.06C119.104 33.3 118.854 32.65 118.334 32.11C117.814 31.57 117.144 31.3 116.324 31.3C115.824 31.3 115.384 31.38 115.004 31.54C114.624 31.7 114.294 31.91 114.014 32.17C113.754 32.41 113.544 32.7 113.384 33.04C113.244 33.36 113.164 33.7 113.144 34.06H119.084ZM125.99 21.76H132.35L141.38 36.52H141.44V21.76H146.12V43H140L130.73 27.88H130.67V43H125.99V21.76ZM149.043 28.42H153.543V43H149.043V28.42ZM148.683 23.83C148.683 23.11 148.933 22.5 149.433 22C149.953 21.48 150.573 21.22 151.293 21.22C152.013 21.22 152.623 21.48 153.123 22C153.643 22.5 153.903 23.11 153.903 23.83C153.903 24.55 153.643 25.17 153.123 25.69C152.623 26.19 152.013 26.44 151.293 26.44C150.573 26.44 149.953 26.19 149.433 25.69C148.933 25.17 148.683 24.55 148.683 23.83ZM171.176 41.77C171.176 44.53 170.476 46.62 169.076 48.04C167.696 49.48 165.586 50.2 162.746 50.2C161.446 50.2 160.166 50.05 158.906 49.75C157.646 49.47 156.486 48.91 155.426 48.07L157.916 44.35C158.616 44.93 159.346 45.39 160.106 45.73C160.886 46.07 161.736 46.24 162.656 46.24C164.036 46.24 165.046 45.9 165.686 45.22C166.346 44.56 166.676 43.71 166.676 42.67V41.26H166.616C166.096 41.96 165.446 42.46 164.666 42.76C163.906 43.04 163.186 43.18 162.506 43.18C161.426 43.18 160.446 43 159.566 42.64C158.686 42.26 157.926 41.74 157.286 41.08C156.666 40.4 156.186 39.6 155.846 38.68C155.506 37.76 155.336 36.75 155.336 35.65C155.336 34.69 155.486 33.75 155.786 32.83C156.106 31.91 156.546 31.1 157.106 30.4C157.686 29.7 158.386 29.14 159.206 28.72C160.026 28.28 160.956 28.06 161.996 28.06C162.636 28.06 163.216 28.13 163.736 28.27C164.276 28.41 164.756 28.59 165.176 28.81C165.596 29.03 165.956 29.28 166.256 29.56C166.556 29.82 166.796 30.08 166.976 30.34H167.036V28.42H171.176V41.77ZM159.836 35.62C159.836 36.1 159.926 36.56 160.106 37C160.286 37.42 160.536 37.8 160.856 38.14C161.196 38.46 161.576 38.72 161.996 38.92C162.436 39.12 162.916 39.22 163.436 39.22C163.936 39.22 164.406 39.12 164.846 38.92C165.286 38.72 165.666 38.46 165.986 38.14C166.326 37.8 166.586 37.42 166.766 37C166.946 36.56 167.036 36.1 167.036 35.62C167.036 35.14 166.946 34.69 166.766 34.27C166.586 33.83 166.326 33.45 165.986 33.13C165.666 32.79 165.286 32.52 164.846 32.32C164.406 32.12 163.936 32.02 163.436 32.02C162.916 32.02 162.436 32.12 161.996 32.32C161.576 32.52 161.196 32.79 160.856 33.13C160.536 33.45 160.286 33.83 160.106 34.27C159.926 34.69 159.836 35.14 159.836 35.62ZM178.372 20.32V30.4H178.432C178.532 30.12 178.702 29.84 178.942 29.56C179.182 29.28 179.472 29.03 179.812 28.81C180.152 28.59 180.552 28.41 181.012 28.27C181.472 28.13 181.972 28.06 182.512 28.06C183.652 28.06 184.572 28.24 185.272 28.6C185.972 28.94 186.512 29.42 186.892 30.04C187.292 30.66 187.562 31.39 187.702 32.23C187.842 33.07 187.912 33.98 187.912 34.96V43H183.412V35.86C183.412 35.44 183.392 35.01 183.352 34.57C183.332 34.11 183.242 33.69 183.082 33.31C182.942 32.93 182.712 32.62 182.392 32.38C182.092 32.14 181.652 32.02 181.072 32.02C180.492 32.02 180.022 32.13 179.662 32.35C179.302 32.55 179.022 32.83 178.822 33.19C178.642 33.53 178.522 33.92 178.462 34.36C178.402 34.8 178.372 35.26 178.372 35.74V43H173.872V20.32H178.372ZM200.129 32.02H196.169V36.88C196.169 37.28 196.189 37.65 196.229 37.99C196.269 38.31 196.359 38.59 196.499 38.83C196.639 39.07 196.849 39.26 197.129 39.4C197.429 39.52 197.819 39.58 198.299 39.58C198.539 39.58 198.849 39.56 199.229 39.52C199.629 39.46 199.929 39.34 200.129 39.16V42.91C199.629 43.09 199.109 43.21 198.569 43.27C198.029 43.33 197.499 43.36 196.979 43.36C196.219 43.36 195.519 43.28 194.879 43.12C194.239 42.96 193.679 42.71 193.199 42.37C192.719 42.01 192.339 41.55 192.059 40.99C191.799 40.43 191.669 39.75 191.669 38.95V32.02H188.789V28.42H191.669V24.1H196.169V28.42H200.129V32.02Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.6566 17.0201C5.85948 17.0201 -0.152224 16.9184 0.100305 13.2452C0.252216 10.8974 3.03005 11.0011 3.03005 11.0011C3.03005 11.0011 3.13066 9.26713 5.40342 10.1341C6.46485 7.68463 8.83821 7.48135 10.655 8.80671C12.4227 7.2242 14.8474 6.81766 17.5738 10.6443C22.2712 8.04137 24.3921 11.1545 25.5542 12.6852C26.8682 11.6648 29.9478 11.4097 29.9478 13.7057C29.9498 16.6135 25.4536 17.0201 15.6562 17.0201L15.6566 17.0201ZM25.8073 11.8163C24.5959 10.3873 23.787 9.36683 21.8674 9.11172C24.2921 7.58105 27.5751 7.52921 28.6857 11.3061C28.6364 11.3061 26.5155 10.8975 25.8073 11.8163ZM21.97 8.29659C21.313 8.70516 21.0112 8.80681 21.0112 8.80681C21.0112 8.80681 19.2435 4.16297 14.899 4.98014C14.899 4.98014 16.0097 3.44947 18.8388 3.70459C21.5653 4.16299 21.7686 6.10222 21.7686 6.10222C21.7686 6.10222 23.485 3.49927 25.961 4.77483C28.7901 6.05038 27.8293 8.49986 27.8293 8.49986C27.8273 8.49986 25.4539 6.35733 21.9696 8.29657L21.97 8.29659ZM21.97 4.98014C21.7175 4.01154 19.6459 3.19436 19.6459 3.19436C21.5142 1.86697 23.9902 2.07228 25.0495 4.01154C23.1319 3.85807 22.7768 4.41812 21.9698 4.98014H21.97ZM14.0411 4.72503C14.0411 4.72503 12.2221 5.03196 12.1728 5.49036C10.8095 4.36828 8.9412 4.36828 8.9412 4.36828C8.93922 4.36828 9.19175 1 12.0702 1C14.9486 1 16.4145 2.73394 16.3632 3.296C14.3429 3.85806 14.0411 4.72503 14.0411 4.72503ZM18.7365 6.86756C20.303 8.6015 20.1511 8.85661 20.1511 8.85661C20.1511 8.85661 18.8885 9.01007 17.8784 9.67378C16.0593 7.32594 13.3328 5.84711 10.707 7.888C8.02982 6.61244 6.26212 7.47942 5.15139 9.26519C3.78814 8.80679 3.07985 9.82725 3.07985 9.82725C3.07985 9.82725 3.5849 5.49036 7.0197 4.98014C10.4545 4.46992 12.0703 6.30754 12.0703 6.30754C12.0703 6.30554 15.4538 3.80627 18.7365 6.86761V6.86756ZM5.30301 17.6343C5.30301 17.6343 9.44408 45.6444 8.58589 45.6444C7.72769 45.6444 6.91879 44.6758 6.91879 44.6758L0 15.9498C2.17215 17.7854 5.30311 17.634 5.30311 17.634L5.30301 17.6343ZM11.5647 18.0927C11.5647 18.0927 12.4742 41.818 12.4742 46.5636C11.3122 46.6652 9.94894 46.0534 9.94894 46.0534L7.42365 17.8376L11.5647 18.0927ZM16.9193 17.8894C16.9193 17.8894 16.363 44.2674 16.363 46.769C15.3529 47.0241 14.0902 46.769 14.0902 46.769C14.0902 46.769 12.6756 17.8894 13.232 17.8894C13.7884 17.9392 16.9193 17.8894 16.9193 17.8894ZM23.1321 17.6343C23.1321 17.6343 20.5062 45.4414 20.4056 45.8501C20.3049 46.2586 17.9316 46.5138 17.9316 46.5138L18.6892 17.8398L23.1321 17.6343ZM29.9999 16.1036C29.2423 19.2148 23.8386 43.6036 23.5861 44.3174C23.3336 45.0309 21.7178 45.4394 21.7178 45.4394C21.7178 45.4394 25.1013 18.9079 25.1526 17.6844C25.9102 17.6345 28.7374 17.4811 30 16.1039L29.9999 16.1036Z" fill="white"/>
      <rect x="42" width="84" height="17.5385" fill="url(#pattern0)"/>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="scale(0.00510204 0.0243902)"/>
        </pattern>
        <image id="image0" width="196" height="41" xlinkHref="data:image/png;base64,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"/>
      </defs>
    </svg>
  );
};

export default withStyles(styles)(Logo);
