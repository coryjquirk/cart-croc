import React from "react";
import "./style.css";
import Texture from '../Images/45-degree-fabric-light.png';

const cardStyle = {
    backgroundImage: `url(${Texture})`,
    maxWidth: '400px'
};

function HomeLaunchers() {
    
    
      return (
        <div>
          <a href="/shop">
            <div class="homeLauncher" style={cardStyle}>
              <h2>
                <span>shop</span>
              </h2>
            </div>
          </a>
          <a href="/checkout">
            <div class="homeLauncher" style={cardStyle}>
              <h2>
                <span>checkout</span>
              </h2>
            </div>
          </a><a href="/receipts">
            <div class="homeLauncher" style={cardStyle}>
              <h2>
                <span>order history</span>
              </h2>
            </div>
          </a><a href="/dashboard">
            <div class="homeLauncher" style={cardStyle}>
              <h2 class="text-muted">
                <span>sign out</span>
              </h2>
            </div>
          </a>
        </div>
      );
}

export default HomeLaunchers;
