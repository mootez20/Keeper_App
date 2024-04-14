import React from "react";

function Header({setkeyword}) {

  const handleSearch = (value)=>{
    setkeyword(value.target.value)
  }
  return (
    <header>
      <div className="headerContainer">
      <h1>Keeper</h1>
      <div className="InputContainer">
  <input placeholder="Search.." id="input" className="input" name="text" type="text" onChange={handleSearch} />
  
</div>
      </div>
    </header>
  );
}

export default Header;
