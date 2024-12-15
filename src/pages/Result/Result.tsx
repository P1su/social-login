const Result = () => {
  const profile = localStorage.getItem('profile');
  return(
    <>
      <h4>{localStorage.getItem('nickname')}</h4>
      {profile ? <img src={profile} alt="프로필 이미지" /> : null}
    </>
  );
};

export default Result;