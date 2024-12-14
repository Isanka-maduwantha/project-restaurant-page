function home(elementid){

    // const element = document.getElementById(elementid);
    elementid.innerHTML =`
    
    
    <section class="content-header home">
    <article>
        <h1>Welcome to The Cozy Bistro</h1>
        <p>Where great food and good times meet</p>
        <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="resturant serving">
    </article>
    <article>
        <h2>Savor the Flavor
        </h2>
        <p>At The Cozy Bistro, we take pride in serving dishes that delight the senses. Whether you're joining us for a family dinner, a romantic evening, or a casual bite with friends, we’ve got something to satisfy every craving. With an extensive menu crafted from fresh, local ingredients, every meal is an experience.</p>
    </article>

</section>
    `;



};

function recipies(elementid){

    elementid.innerHTML=`
    
    <section class="content-main recipies">

    <article>
        <h1>Our Signature Dishes</h1>
        <div class="dishes">
            <img src="https://images.pexels.com/photos/27819687/pexels-photo-27819687/free-photo-of-a-chocolate-pudding-with-ice-cream-on-top.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="lava cake" >

            <img src="https://images.pexels.com/photos/28902897/pexels-photo-28902897/free-photo-of-delicious-grilled-meat-skewers-on-wooden-stand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="grilled-chicken">
            <img src="https://images.pexels.com/photos/10695966/pexels-photo-10695966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="vegfry">

        </div>
        <p>From our hearty Grilled Chicken Alfredo to our delectable Chocolate Lava Cake, our menu is designed to provide a little something for everyone. Be sure to try our Vegetable Stir-Fry for a healthy twist or enjoy a perfectly Pan-Seared Salmon for a savory seafood treat.
            <br>
            <a href="#menu">Discover our full menu in the Menu Tab above!</a>
        </p>
    </article>
    <article>
        <h2>What Makes Us Special?</h2>
        <img src="https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="makes us special">
        <ul>
            <li><em>Fresh Ingredients</em>: We prioritize the freshest local ingredients, ensuring every dish is bursting with flavor.</li>
            <li><em>Friendly Atmosphere</em>: Enjoy a warm, cozy ambiance that's perfect for any occasion.
            </li>
            <li><em>Top-Notch Service</em>: Our staff is dedicated to making every dining experience memorable.</li>
        </ul>
    </article>
</section>
    
    `
};
function contact(elementid){

    elementid.innerHTML = `
    <section class="content-footer contact">
    <article>
        <h1>Join Us Today!</h1>
        <p>Whether you’re in the mood for a relaxing evening or a quick bite, The Cozy Bistro offers something for every mood. Our beautiful restaurant is located in downtown, where you can enjoy great food, lively conversation, and a welcoming environment.</p>
    </article>
    <article>
        <h2>Our Location</h2>
        <p>123 Main Street, Downtown City</p>
<p>Visit us for an unforgettable dining experience!</p>
    </article>
    <article>
        <h2>Follow Us on Social Media</h2>
        <p>Stay up-to-date with the latest events, specials, and mouthwatering food photos!</p>
        <ul>
            <li>Instagram: @TheCozyBistro
            </li>
            <li>Facebook: @CozyBistro</li>
        </ul>
    </article>
    <article>
        <h2>Reserve Your Table</h2>
        <img src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="reserve table" >
        <p>Don't wait! Ensure you have a spot by booking your table online or giving us a call at <em id="cont-number" onclick="myFunction('cont-number')">(123) 456-7890</em>. We look forward to serving you!</p>
    </article>
</section>
    
    
    `
}




export {home,recipies,contact};