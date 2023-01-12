import ShopCreditCard from "./elements/ShopCreditCard";
import SettingsPageTitle from "./SettingsPageTitle";
import ShopPackageCard from "./elements/ShopPackageCard"
function Shop() {
  return (
    <div className="shop-template">
      <SettingsPageTitle />
      <div className="shop-row">
        <div className="setting-title">
          <h3>Credits</h3>
        </div>
        <p className="shop-row-para">Buy and spend credit to gain entry in tournaments.</p>
      <div className="shop-grid">
        <div>
        <ShopCreditCard />
        </div>
        <div>
          <ShopCreditCard />
        </div>

        <div>
          <ShopCreditCard />
        </div>

        <div>
          <ShopCreditCard />
        </div>
        <div>
          <ShopCreditCard />
        </div>

        <div>
          <ShopCreditCard />
        </div>

      </div>
      </div>

      <div className="shop-row">
        <div className="setting-title">
          <h3>Packages</h3>
        </div>
      <div className="shop-grid">
        <div>
        <ShopPackageCard />
        </div>
        <div>
          <ShopPackageCard />
        </div>

        <div>
          <ShopPackageCard />
        </div>

        <div>
          <ShopPackageCard />
        </div>
        <div>
          <ShopPackageCard />
        </div>

        <div>
          <ShopPackageCard />
        </div>
        
      </div>
      </div>
    </div>
  )
}
export default Shop;