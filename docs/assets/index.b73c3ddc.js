(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const g of i)if(g.type==="childList")for(const v of g.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&s(v)}).observe(document,{childList:!0,subtree:!0});function r(i){const g={};return i.integrity&&(g.integrity=i.integrity),i.referrerpolicy&&(g.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?g.credentials="include":i.crossorigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function s(i){if(i.ep)return;i.ep=!0;const g=r(i);fetch(i.href,g)}})();function z(){}function Ee(e){return e()}function Fe(){return Object.create(null)}function ie(e){e.forEach(Ee)}function Be(e){return typeof e=="function"}function Te(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}let ue;function se(e,n){return ue||(ue=document.createElement("a")),ue.href=n,e===ue.href}function Le(e){return Object.keys(e).length===0}function Re(e,...n){if(e==null)return z;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function $e(e,n,r){e.$$.on_destroy.push(Re(n,r))}function M(e,n){e.appendChild(n)}function j(e,n,r){e.insertBefore(n,r||null)}function G(e){e.parentNode&&e.parentNode.removeChild(e)}function We(e,n){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(n)}function O(e){return document.createElement(e)}function Ae(e){return document.createTextNode(e)}function J(){return Ae(" ")}function de(e,n,r,s){return e.addEventListener(n,r,s),()=>e.removeEventListener(n,r,s)}function P(e,n,r){r==null?e.removeAttribute(n):e.getAttribute(n)!==r&&e.setAttribute(n,r)}function De(e){return Array.from(e.childNodes)}function fe(e,n,r,s){r===null?e.style.removeProperty(n):e.style.setProperty(n,r,s?"important":"")}let ve;function le(e){ve=e}const ae=[],ye=[],ge=[],ke=[],He=Promise.resolve();let be=!1;function Ge(){be||(be=!0,He.then(Me))}function we(e){ge.push(e)}const he=new Set;let ce=0;function Me(){const e=ve;do{for(;ce<ae.length;){const n=ae[ce];ce++,le(n),Ie(n.$$)}for(le(null),ae.length=0,ce=0;ye.length;)ye.pop()();for(let n=0;n<ge.length;n+=1){const r=ge[n];he.has(r)||(he.add(r),r())}ge.length=0}while(ae.length);for(;ke.length;)ke.pop()();be=!1,he.clear(),le(e)}function Ie(e){if(e.fragment!==null){e.update(),ie(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(we)}}const Ne=new Set;function Ue(e,n){e&&e.i&&(Ne.delete(e),e.i(n))}function je(e,n,r,s){const{fragment:i,after_update:g}=e.$$;i&&i.m(n,r),s||we(()=>{const v=e.$$.on_mount.map(Ee).filter(Be);e.$$.on_destroy?e.$$.on_destroy.push(...v):ie(v),e.$$.on_mount=[]}),g.forEach(we)}function ze(e,n){const r=e.$$;r.fragment!==null&&(ie(r.on_destroy),r.fragment&&r.fragment.d(n),r.on_destroy=r.fragment=null,r.ctx=[])}function qe(e,n){e.$$.dirty[0]===-1&&(ae.push(e),Ge(),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function Ve(e,n,r,s,i,g,v,f=[-1]){const h=ve;le(e);const o=e.$$={fragment:null,ctx:[],props:g,update:z,not_equal:i,bound:Fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:Fe(),dirty:f,skip_bound:!1,root:n.target||h.$$.root};v&&v(o.root);let C=!1;if(o.ctx=r?r(e,n.props||{},(c,F,...L)=>{const W=L.length?L[0]:F;return o.ctx&&i(o.ctx[c],o.ctx[c]=W)&&(!o.skip_bound&&o.bound[c]&&o.bound[c](W),C&&qe(e,c)),F}):[],o.update(),C=!0,ie(o.before_update),o.fragment=s?s(o.ctx):!1,n.target){if(n.hydrate){const c=De(n.target);o.fragment&&o.fragment.l(c),c.forEach(G)}else o.fragment&&o.fragment.c();n.intro&&Ue(e.$$.fragment),je(e,n.target,n.anchor,n.customElement),Me()}le(h)}class Ke{$destroy(){ze(this,1),this.$destroy=z}$on(n,r){if(!Be(r))return z;const s=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return s.push(r),()=>{const i=s.indexOf(r);i!==-1&&s.splice(i,1)}}$set(n){this.$$set&&!Le(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const Z=[];function Je(e,n=z){let r;const s=new Set;function i(f){if(Te(e,f)&&(e=f,r)){const h=!Z.length;for(const o of s)o[1](),Z.push(o,e);if(h){for(let o=0;o<Z.length;o+=2)Z[o][0](Z[o+1]);Z.length=0}}}function g(f){i(f(e))}function v(f,h=z){const o=[f,h];return s.add(o),s.size===1&&(r=n(i)||z),f(e),()=>{s.delete(o),s.size===0&&(r(),r=null)}}return{set:i,update:g,subscribe:v}}let _e=Je();const Xe=[{url:"Avocado.png",name:"avocado"},{url:"Baby Bottle.png",name:"baby_bottle"},{url:"Bacon.png",name:"bacon"},{url:"Bagel.png",name:"bagel"},{url:"Baguette Bread.png",name:"baguette_bread"},{url:"Banana.png",name:"banana"},{url:"Beer Mug.png",name:"beer_mug"},{url:"Bell Pepper.png",name:"bell_pepper"},{url:"Bento Box.png",name:"bento_box"},{url:"Beverage Box.png",name:"beverage_box"},{url:"Birthday Cake.png",name:"birthday_cake"},{url:"Blueberries.png",name:"blueberries"},{url:"Bowl With Spoon.png",name:"bowl_with_spoon"},{url:"Bread.png",name:"bread"},{url:"Bubble Tea.png",name:"bubble_tea"},{url:"Burrito.png",name:"burrito"},{url:"Butter.png",name:"butter"},{url:"Candy.png",name:"candy"},{url:"Canned Food.png",name:"canned_food"},{url:"Carrot.png",name:"carrot"},{url:"Cheese Wedge.png",name:"cheese_wedge"},{url:"Cherries.png",name:"cherries"},{url:"Chestnut.png",name:"chestnut"},{url:"Chocolate Bar.png",name:"chocolate_bar"},{url:"Chopsticks.png",name:"chopsticks"},{url:"Clinking Beer Mugs.png",name:"clinking_beer_mugs"},{url:"Clinking Glasses.png",name:"clinking_glasses"},{url:"Cocktail Glass.png",name:"cocktail_glass"},{url:"Coconut.png",name:"coconut"},{url:"Cooked Rice.png",name:"cooked_rice"},{url:"Cookie.png",name:"cookie"},{url:"Cooking.png",name:"cooking"},{url:"Croissant.png",name:"croissant"},{url:"Cucumber.png",name:"cucumber"},{url:"Cup With Straw.png",name:"cup_with_straw"},{url:"Cupcake.png",name:"cupcake"},{url:"Curry Rice.png",name:"curry_rice"},{url:"Custard.png",name:"custard"},{url:"Cut Of Meat.png",name:"cut_of_meat"},{url:"Doughnut.png",name:"doughnut"},{url:"Dumpling.png",name:"dumpling"},{url:"Ear Of Corn.png",name:"ear_of_corn"},{url:"Egg.png",name:"egg"},{url:"Eggplant.png",name:"eggplant"},{url:"Falafel.png",name:"falafel"},{url:"Flatbread.png",name:"flatbread"},{url:"Fondue.png",name:"fondue"},{url:"Fork And Knife With Plate.png",name:"fork_and_knife_with_plate"},{url:"Fortune Cookie.png",name:"fortune_cookie"},{url:"French Fries.png",name:"french_fries"},{url:"Fried Shrimp.png",name:"fried_shrimp"},{url:"Garlic.png",name:"garlic"},{url:"Glass Of Milk.png",name:"glass_of_milk"},{url:"Grapes.png",name:"grapes"},{url:"Green Apple.png",name:"green_apple"},{url:"Green Salad.png",name:"green_salad"},{url:"Hamburger.png",name:"hamburger"},{url:"Honey Pot.png",name:"honey_pot"},{url:"Hot Beverage.png",name:"hot_beverage"},{url:"Hot Dog.png",name:"hot_dog"},{url:"Hot Pepper.png",name:"hot_pepper"},{url:"Ice Cream.png",name:"ice_cream"},{url:"Ice.png",name:"ice"},{url:"Kitchen Knife.png",name:"kitchen_knife"},{url:"Kiwi Fruit.png",name:"kiwi_fruit"},{url:"Leafy Green.png",name:"leafy_green"},{url:"Lemon.png",name:"lemon"},{url:"Mango.png",name:"mango"},{url:"Meat On Bone.png",name:"meat_on_bone"},{url:"Melon.png",name:"melon"},{url:"Moon Cake.png",name:"moon_cake"},{url:"Mushroom.png",name:"mushroom"},{url:"Olive.png",name:"olive"},{url:"Onion.png",name:"onion"},{url:"Oyster.png",name:"oyster"},{url:"Pancakes.png",name:"pancakes"},{url:"Peach.png",name:"peach"},{url:"Peanuts.png",name:"peanuts"},{url:"Pear.png",name:"pear"},{url:"Pie.png",name:"pie"},{url:"Pineapple.png",name:"pineapple"},{url:"Popcorn.png",name:"popcorn"},{url:"Pot Of Food.png",name:"pot_of_food"},{url:"Potato.png",name:"potato"},{url:"Poultry Leg.png",name:"poultry_leg"},{url:"Pretzel.png",name:"pretzel"},{url:"Red Apple.png",name:"red_apple"},{url:"Rice Ball.png",name:"rice_ball"},{url:"Rice Cracker.png",name:"rice_cracker"},{url:"Roasted Sweet Potato.png",name:"roasted_sweet_potato"},{url:"Sake.png",name:"sake"},{url:"Salt.png",name:"salt"},{url:"Sandwich.png",name:"sandwich"},{url:"Shallow Pan Of Food.png",name:"shallow_pan_of_food"},{url:"Shaved Ice.png",name:"shaved_ice"},{url:"Shortcake.png",name:"shortcake"},{url:"Soft Ice Cream.png",name:"soft_ice_cream"},{url:"Spaghetti.png",name:"spaghetti"},{url:"Spoon.png",name:"spoon"},{url:"Steaming Bowl.png",name:"steaming_bowl"},{url:"Strawberry.png",name:"strawberry"},{url:"Stuffed Flatbread.png",name:"stuffed_flatbread"},{url:"Sushi.png",name:"sushi"},{url:"Taco.png",name:"taco"},{url:"Takeout Box.png",name:"takeout_box"},{url:"Tamale.png",name:"tamale"},{url:"Tangerine.png",name:"tangerine"},{url:"Teacup Without Handle.png",name:"teacup_without_handle"},{url:"Tomato.png",name:"tomato"},{url:"Tropical Drink.png",name:"tropical_drink"},{url:"Tumbler Glass.png",name:"tumbler_glass"},{url:"Waffle.png",name:"waffle"},{url:"Watermelon.png",name:"watermelon"},{url:"Wine Glass.png",name:"wine_glass"}],Ye=[{url:"Baby Chick.png",name:"baby_chick"},{url:"Blossom.png",name:"blossom"},{url:"Butterfly.png",name:"butterfly"},{url:"Cactus.png",name:"cactus"},{url:"Cherry Blossom.png",name:"cherry_blossom"},{url:"Chicken.png",name:"chicken"},{url:"Cow Face.png",name:"cow_face"},{url:"Crab.png",name:"crab"},{url:"Crescent Moon.png",name:"crescent_moon"},{url:"Deciduous Tree.png",name:"deciduous_tree"},{url:"Dog Face.png",name:"dog_face"},{url:"Dragon Face.png",name:"dragon_face"},{url:"Evergreen Tree.png",name:"evergreen_tree"},{url:"Flamingo.png",name:"flamingo"},{url:"Fly.png",name:"fly"},{url:"Fox.png",name:"fox"},{url:"Frog.png",name:"frog"},{url:"Full Moon Face.png",name:"full_moon_face"},{url:"Globe With Meridians.png",name:"globe_with_meridians"},{url:"Guide Dog.png",name:"guide_dog"},{url:"Hamster.png",name:"hamster"},{url:"Hatching Chick.png",name:"hatching_chick"},{url:"Hibiscus.png",name:"hibiscus"},{url:"Koala.png",name:"koala"},{url:"Lady Beetle.png",name:"lady_beetle"},{url:"Lion.png",name:"lion"},{url:"Lobster.png",name:"lobster"},{url:"Microbe.png",name:"microbe"},{url:"Monkey Face.png",name:"monkey_face"},{url:"Mouse Face.png",name:"mouse_face"},{url:"New Moon Face.png",name:"new_moon_face"},{url:"Octopus.png",name:"octopus"},{url:"Panda.png",name:"panda"},{url:"Penguin.png",name:"penguin"},{url:"Pig Face.png",name:"pig_face"},{url:"Pig Nose.png",name:"pig_nose"},{url:"Polar Bear.png",name:"polar_bear"},{url:"Rabbit Face.png",name:"rabbit_face"},{url:"Rock.png",name:"rock"},{url:"See No Evil Monkey.png",name:"see_no_evil_monkey"},{url:"Spider Web.png",name:"spider_web"},{url:"Spider.png",name:"spider"},{url:"Spiral Shell.png",name:"spiral_shell"},{url:"Sun With Face.png",name:"sun_with_face"},{url:"Tiger Face.png",name:"tiger_face"},{url:"Worm.png",name:"worm"}],Ze=[{url:"American Football.png",name:"american_football"},{url:"Baseball.png",name:"baseball"},{url:"Basketball.png",name:"basketball"},{url:"Bomb.png",name:"bomb"},{url:"Bowling.png",name:"bowling"},{url:"Box.png",name:"box"},{url:"Circus Tent.png",name:"circus_tent"},{url:"Clapper Board.png",name:"clapper_board"},{url:"Clipboard.png",name:"clipboard"},{url:"Crystal Ball.png",name:"crystal_ball"},{url:"Curling Stone.png",name:"curling_stone"},{url:"Droplet.png",name:"droplet"},{url:"First Place Medal.png",name:"first_place_medal"},{url:"Game Die.png",name:"game_die"},{url:"Gear.png",name:"gear"},{url:"Gem Stone.png",name:"gem_stone"},{url:"Hourglass Not Done.png",name:"hourglass_not_done"},{url:"Jack O Lantern.png",name:"jack_o_lantern"},{url:"Joystick.png",name:"joystick"},{url:"Laptop.png",name:"laptop"},{url:"Mobile Phone.png",name:"mobile_phone"},{url:"Money Bag.png",name:"money_bag"},{url:"Movie Camera.png",name:"movie_camera"},{url:"Nazar Amulet.png",name:"nazar_amulet"},{url:"Newspaper.png",name:"newspaper"},{url:"Notebook With Decorative Cover.png",name:"notebook_with_decorative_cover"},{url:"Open Book.png",name:"open_book"},{url:"Open File Folder.png",name:"open_file_folder"},{url:"Open Mailbox With Lowered Flag.png",name:"open_mailbox_with_lowered_flag"},{url:"Optical Disk.png",name:"optical_disk"},{url:"Pill.png",name:"pill"},{url:"Pool 8 Ball.png",name:"pool_8_ball"},{url:"Puzzle Piece.png",name:"puzzle_piece"},{url:"Rainbow Flag.png",name:"rainbow_flag"},{url:"Robot.png",name:"robot"},{url:"Roll Of Paper.png",name:"roll_of_paper"},{url:"Rugby Football.png",name:"rugby_football"},{url:"Second Place Medal.png",name:"second_place_medal"},{url:"Slot Machine.png",name:"slot_machine"},{url:"Soccer Ball.png",name:"soccer_ball"},{url:"Softball.png",name:"softball"},{url:"Teddy Bear.png",name:"teddy_bear"},{url:"Telephone.png",name:"telephone"},{url:"Tennis.png",name:"tennis"},{url:"Third Place Medal.png",name:"third_place_medal"},{url:"Toilet.png",name:"toilet"},{url:"Toolbox.png",name:"toolbox"},{url:"Top Hat.png",name:"top_hat"},{url:"Trophy.png",name:"trophy"},{url:"Unlocked.png",name:"unlocked"},{url:"Video Game.png",name:"video_game"},{url:"Volleyball.png",name:"volleyball"},{url:"Wood.png",name:"wood"},{url:"World Map.png",name:"world_map"},{url:"Yarn.png",name:"yarn"},{url:"Yo Yo.png",name:"yo_yo"}],Qe=[{url:"Alien Monster.png",name:"alien_monster"},{url:"Alien.png",name:"alien"},{url:"Angry Face With Horns.png",name:"angry_face_with_horns"},{url:"Angry Face.png",name:"angry_face"},{url:"Anguished Face.png",name:"anguished_face"},{url:"Anxious Face With Sweat.png",name:"anxious_face_with_sweat"},{url:"Astonished Face.png",name:"astonished_face"},{url:"Beaming Face With Smiling Eyes.png",name:"beaming_face_with_smiling_eyes"},{url:"Cat Face.png",name:"cat_face"},{url:"Cat With Tears Of Joy.png",name:"cat_with_tears_of_joy"},{url:"Cat With Wry Smile.png",name:"cat_with_wry_smile"},{url:"Clown Face.png",name:"clown_face"},{url:"Cold Face.png",name:"cold_face"},{url:"Confounded Face.png",name:"confounded_face"},{url:"Confused Face.png",name:"confused_face"},{url:"Cowboy Hat Face.png",name:"cowboy_hat_face"},{url:"Crying Cat.png",name:"crying_cat"},{url:"Crying Face.png",name:"crying_face"},{url:"Disappointed Face.png",name:"disappointed_face"},{url:"Disguised Face.png",name:"disguised_face"},{url:"Dizzy Face.png",name:"dizzy_face"},{url:"Downcast Face With Sweat.png",name:"downcast_face_with_sweat"},{url:"Drooling Face.png",name:"drooling_face"},{url:"Exploding Head.png",name:"exploding_head"},{url:"Expressionless Face.png",name:"expressionless_face"},{url:"Face Blowing A Kiss.png",name:"face_blowing_a_kiss"},{url:"Face Exhaling.png",name:"face_exhaling"},{url:"Face In Clouds.png",name:"face_in_clouds"},{url:"Face Savoring Food.png",name:"face_savoring_food"},{url:"Face Screaming In Fear.png",name:"face_screaming_in_fear"},{url:"Face Vomiting.png",name:"face_vomiting"},{url:"Face With Hand Over Mouth.png",name:"face_with_hand_over_mouth"},{url:"Face With Head Bandage.png",name:"face_with_head_bandage"},{url:"Face With Medical Mask.png",name:"face_with_medical_mask"},{url:"Face With Monocle.png",name:"face_with_monocle"},{url:"Face With Open Mouth.png",name:"face_with_open_mouth"},{url:"Face With Raised Eyebrow.png",name:"face_with_raised_eyebrow"},{url:"Face With Rolling Eyes.png",name:"face_with_rolling_eyes"},{url:"Face With Spiral Eyes.png",name:"face_with_spiral_eyes"},{url:"Face With Steam From Nose.png",name:"face_with_steam_from_nose"},{url:"Face With Symbols On Mouth.png",name:"face_with_symbols_on_mouth"},{url:"Face With Tears Of Joy.png",name:"face_with_tears_of_joy"},{url:"Face With Thermometer.png",name:"face_with_thermometer"},{url:"Face With Tongue.png",name:"face_with_tongue"},{url:"Face Without Mouth.png",name:"face_without_mouth"},{url:"Fearful Face.png",name:"fearful_face"},{url:"Flushed Face.png",name:"flushed_face"},{url:"Frowning Face With Open Mouth.png",name:"frowning_face_with_open_mouth"},{url:"Frowning Face.png",name:"frowning_face"},{url:"Ghost.png",name:"ghost"},{url:"Goblin.png",name:"goblin"},{url:"Grimacing Face.png",name:"grimacing_face"},{url:"Grinning Cat With Smiling Eyes.png",name:"grinning_cat_with_smiling_eyes"},{url:"Grinning Cat.png",name:"grinning_cat"},{url:"Grinning Face With Big Eyes.png",name:"grinning_face_with_big_eyes"},{url:"Grinning Face With Smiling Eyes.png",name:"grinning_face_with_smiling_eyes"},{url:"Grinning Face With Sweat.png",name:"grinning_face_with_sweat"},{url:"Grinning Face.png",name:"grinning_face"},{url:"Grinning Squinting Face.png",name:"grinning_squinting_face"},{url:"Hot Face.png",name:"hot_face"},{url:"Hugging Face.png",name:"hugging_face"},{url:"Hushed Face.png",name:"hushed_face"},{url:"Kissing Cat.png",name:"kissing_cat"},{url:"Kissing Face With Closed Eyes.png",name:"kissing_face_with_closed_eyes"},{url:"Kissing Face With Smiling Eyes.png",name:"kissing_face_with_smiling_eyes"},{url:"Kissing Face.png",name:"kissing_face"},{url:"Loudly Crying Face.png",name:"loudly_crying_face"},{url:"Lying Face.png",name:"lying_face"},{url:"Money Mouth Face.png",name:"money_mouth_face"},{url:"Nauseated Face.png",name:"nauseated_face"},{url:"Nerd Face.png",name:"nerd_face"},{url:"Neutral Face.png",name:"neutral_face"},{url:"Ogre.png",name:"ogre"},{url:"Partying Face.png",name:"partying_face"},{url:"Pensive Face.png",name:"pensive_face"},{url:"Persevering Face.png",name:"persevering_face"},{url:"Pile Of Poo.png",name:"pile_of_poo"},{url:"Pleading Face.png",name:"pleading_face"},{url:"Pouting Cat.png",name:"pouting_cat"},{url:"Pouting Face.png",name:"pouting_face"},{url:"Relieved Face.png",name:"relieved_face"},{url:"Rolling On The Floor Laughing.png",name:"rolling_on_the_floor_laughing"},{url:"Sad But Relieved Face.png",name:"sad_but_relieved_face"},{url:"Shushing Face.png",name:"shushing_face"},{url:"Skull And Crossbones.png",name:"skull_and_crossbones"},{url:"Skull.png",name:"skull"},{url:"Sleeping Face.png",name:"sleeping_face"},{url:"Sleepy Face.png",name:"sleepy_face"},{url:"Slightly Frowning Face.png",name:"slightly_frowning_face"},{url:"Slightly Smiling Face.png",name:"slightly_smiling_face"},{url:"Smiling Cat With Heart Eyes.png",name:"smiling_cat_with_heart_eyes"},{url:"Smiling Face With Halo.png",name:"smiling_face_with_halo"},{url:"Smiling Face With Heart Eyes.png",name:"smiling_face_with_heart_eyes"},{url:"Smiling Face With Hearts.png",name:"smiling_face_with_hearts"},{url:"Smiling Face With Horns.png",name:"smiling_face_with_horns"},{url:"Smiling Face With Smiling Eyes.png",name:"smiling_face_with_smiling_eyes"},{url:"Smiling Face With Sunglasses.png",name:"smiling_face_with_sunglasses"},{url:"Smiling Face With Tear.png",name:"smiling_face_with_tear"},{url:"Smiling Face.png",name:"smiling_face"},{url:"Smirking Face.png",name:"smirking_face"},{url:"Sneezing Face.png",name:"sneezing_face"},{url:"Squinting Face With Tongue.png",name:"squinting_face_with_tongue"},{url:"Star Struck.png",name:"star_struck"},{url:"Thinking Face.png",name:"thinking_face"},{url:"Tired Face.png",name:"tired_face"},{url:"Unamused Face.png",name:"unamused_face"},{url:"Upside Down Face.png",name:"upside_down_face"},{url:"Weary Cat.png",name:"weary_cat"},{url:"Weary Face.png",name:"weary_face"},{url:"Winking Face With Tongue.png",name:"winking_face_with_tongue"},{url:"Winking Face.png",name:"winking_face"},{url:"Woozy Face.png",name:"woozy_face"},{url:"Worried Face.png",name:"worried_face"},{url:"Yawning Face.png",name:"yawning_face"},{url:"Zany Face.png",name:"zany_face"},{url:"Zipper Mouth Face.png",name:"zipper_mouth_face"}],Q={food:Xe,nature:Ye,other:Ze,smiles:Qe};var Oe={exports:{}};(function(e){(function(n){var r=re(),s=oe(),i=V(),g=x(),v={imagePlaceholder:void 0,cacheBust:!1},f={toSvg:h,toPng:C,toJpeg:c,toBlob:F,toPixelData:o,impl:{fontFaces:i,images:g,util:r,inliner:s,options:{}}};e.exports=f;function h(t,a){return a=a||{},L(a),Promise.resolve(t).then(function(m){return ee(m,a.filter,!0)}).then(X).then(ne).then(l).then(function(m){return q(m,a.width||r.width(t),a.height||r.height(t))});function l(m){return a.bgcolor&&(m.style.backgroundColor=a.bgcolor),a.width&&(m.style.width=a.width+"px"),a.height&&(m.style.height=a.height+"px"),a.style&&Object.keys(a.style).forEach(function(b){m.style[b]=a.style[b]}),m}}function o(t,a){return W(t,a||{}).then(function(l){return l.getContext("2d").getImageData(0,0,r.width(t),r.height(t)).data})}function C(t,a){return W(t,a||{}).then(function(l){return l.toDataURL()})}function c(t,a){return a=a||{},W(t,a).then(function(l){return l.toDataURL("image/jpeg",a.quality||1)})}function F(t,a){return W(t,a||{}).then(r.canvasToBlob)}function L(t){typeof t.imagePlaceholder>"u"?f.impl.options.imagePlaceholder=v.imagePlaceholder:f.impl.options.imagePlaceholder=t.imagePlaceholder,typeof t.cacheBust>"u"?f.impl.options.cacheBust=v.cacheBust:f.impl.options.cacheBust=t.cacheBust}function W(t,a){return h(t,a).then(r.makeImage).then(r.delay(100)).then(function(m){var b=l(t);return b.getContext("2d").drawImage(m,0,0),b});function l(m){var b=document.createElement("canvas");if(b.width=a.width||r.width(m),b.height=a.height||r.height(m),a.bgcolor){var y=b.getContext("2d");y.fillStyle=a.bgcolor,y.fillRect(0,0,b.width,b.height)}return b}}function ee(t,a,l){if(!l&&a&&!a(t))return Promise.resolve();return Promise.resolve(t).then(m).then(function(p){return b(t,p,a)}).then(function(p){return y(t,p)});function m(p){return p instanceof HTMLCanvasElement?r.makeImage(p.toDataURL()):p.cloneNode(!1)}function b(p,_,T){var D=p.childNodes;if(D.length===0)return Promise.resolve(_);return S(_,r.asArray(D),T).then(function(){return _});function S(Y,A,E){var R=Promise.resolve();return A.forEach(function(K){R=R.then(function(){return ee(K,E)}).then(function($){$&&Y.appendChild($)})}),R}}function y(p,_){if(!(_ instanceof Element))return _;return Promise.resolve().then(T).then(D).then(S).then(Y).then(function(){return _});function T(){A(window.getComputedStyle(p),_.style);function A(E,R){E.cssText?R.cssText=E.cssText:K(E,R);function K($,I){r.asArray($).forEach(function(u){I.setProperty(u,$.getPropertyValue(u),$.getPropertyPriority(u))})}}}function D(){[":before",":after"].forEach(function(E){A(E)});function A(E){var R=window.getComputedStyle(p,E),K=R.getPropertyValue("content");if(K===""||K==="none")return;var $=r.uid();_.className=_.className+" "+$;var I=document.createElement("style");I.appendChild(u($,E,R)),_.appendChild(I);function u(d,k,w){var B="."+d+":"+k,H=w.cssText?me(w):pe(w);return document.createTextNode(B+"{"+H+"}");function me(N){var U=N.getPropertyValue("content");return N.cssText+" content: "+U+";"}function pe(N){return r.asArray(N).map(U).join("; ")+";";function U(te){return te+": "+N.getPropertyValue(te)+(N.getPropertyPriority(te)?" !important":"")}}}}}function S(){p instanceof HTMLTextAreaElement&&(_.innerHTML=p.value),p instanceof HTMLInputElement&&_.setAttribute("value",p.value)}function Y(){_ instanceof SVGElement&&(_.setAttribute("xmlns","http://www.w3.org/2000/svg"),_ instanceof SVGRectElement&&["width","height"].forEach(function(A){var E=_.getAttribute(A);!E||_.style.setProperty(A,E)}))}}}function X(t){return i.resolveAll().then(function(a){var l=document.createElement("style");return t.appendChild(l),l.appendChild(document.createTextNode(a)),t})}function ne(t){return g.inlineAll(t).then(function(){return t})}function q(t,a,l){return Promise.resolve(t).then(function(m){return m.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(m)}).then(r.escapeXhtml).then(function(m){return'<foreignObject x="0" y="0" width="100%" height="100%">'+m+"</foreignObject>"}).then(function(m){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+a+'" height="'+l+'">'+m+"</svg>"}).then(function(m){return"data:image/svg+xml;charset=utf-8,"+m})}function re(){return{escape:Y,parseExtension:a,mimeType:l,dataAsUrl:S,isDataUrl:m,canvasToBlob:y,resolveUrl:p,getAndEncode:D,uid:_(),delay:A,asArray:E,escapeXhtml:R,makeImage:T,width:K,height:$};function t(){var u="application/font-woff",d="image/jpeg";return{woff:u,woff2:u,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:d,jpeg:d,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function a(u){var d=/\.([^\.\/]*?)$/g.exec(u);return d?d[1]:""}function l(u){var d=a(u).toLowerCase();return t()[d]||""}function m(u){return u.search(/^(data:)/)!==-1}function b(u){return new Promise(function(d){for(var k=window.atob(u.toDataURL().split(",")[1]),w=k.length,B=new Uint8Array(w),H=0;H<w;H++)B[H]=k.charCodeAt(H);d(new Blob([B],{type:"image/png"}))})}function y(u){return u.toBlob?new Promise(function(d){u.toBlob(d)}):b(u)}function p(u,d){var k=document.implementation.createHTMLDocument(),w=k.createElement("base");k.head.appendChild(w);var B=k.createElement("a");return k.body.appendChild(B),w.href=d,B.href=u,B.href}function _(){var u=0;return function(){return"u"+d()+u++;function d(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function T(u){return new Promise(function(d,k){var w=new Image;w.onload=function(){d(w)},w.onerror=k,w.src=u})}function D(u){var d=3e4;return f.impl.options.cacheBust&&(u+=(/\?/.test(u)?"&":"?")+new Date().getTime()),new Promise(function(k){var w=new XMLHttpRequest;w.onreadystatechange=me,w.ontimeout=pe,w.responseType="blob",w.timeout=d,w.open("GET",u,!0),w.send();var B;if(f.impl.options.imagePlaceholder){var H=f.impl.options.imagePlaceholder.split(/,/);H&&H[1]&&(B=H[1])}function me(){if(w.readyState===4){if(w.status!==200){B?k(B):N("cannot fetch resource: "+u+", status: "+w.status);return}var U=new FileReader;U.onloadend=function(){var te=U.result.split(/,/)[1];k(te)},U.readAsDataURL(w.response)}}function pe(){B?k(B):N("timeout of "+d+"ms occured while fetching resource: "+u)}function N(U){console.error(U),k("")}})}function S(u,d){return"data:"+d+";base64,"+u}function Y(u){return u.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function A(u){return function(d){return new Promise(function(k){setTimeout(function(){k(d)},u)})}}function E(u){for(var d=[],k=u.length,w=0;w<k;w++)d.push(u[w]);return d}function R(u){return u.replace(/#/g,"%23").replace(/\n/g,"%0A")}function K(u){var d=I(u,"border-left-width"),k=I(u,"border-right-width");return u.scrollWidth+d+k}function $(u){var d=I(u,"border-top-width"),k=I(u,"border-bottom-width");return u.scrollHeight+d+k}function I(u,d){var k=window.getComputedStyle(u).getPropertyValue(d);return parseFloat(k.replace("px",""))}}function oe(){var t=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:b,shouldProcess:a,impl:{readUrls:l,inline:m}};function a(y){return y.search(t)!==-1}function l(y){for(var p=[],_;(_=t.exec(y))!==null;)p.push(_[1]);return p.filter(function(T){return!r.isDataUrl(T)})}function m(y,p,_,T){return Promise.resolve(p).then(function(S){return _?r.resolveUrl(S,_):S}).then(T||r.getAndEncode).then(function(S){return r.dataAsUrl(S,r.mimeType(p))}).then(function(S){return y.replace(D(p),"$1"+S+"$3")});function D(S){return new RegExp(`(url\\(['"]?)(`+r.escape(S)+`)(['"]?\\))`,"g")}}function b(y,p,_){if(T())return Promise.resolve(y);return Promise.resolve(y).then(l).then(function(D){var S=Promise.resolve(y);return D.forEach(function(Y){S=S.then(function(A){return m(A,Y,p,_)})}),S});function T(){return!a(y)}}}function V(){return{resolveAll:t,impl:{readAll:a}};function t(){return a().then(function(l){return Promise.all(l.map(function(m){return m.resolve()}))}).then(function(l){return l.join(`
`)})}function a(){return Promise.resolve(r.asArray(document.styleSheets)).then(m).then(l).then(function(y){return y.map(b)});function l(y){return y.filter(function(p){return p.type===CSSRule.FONT_FACE_RULE}).filter(function(p){return s.shouldProcess(p.style.getPropertyValue("src"))})}function m(y){var p=[];return y.forEach(function(_){try{r.asArray(_.cssRules||[]).forEach(p.push.bind(p))}catch(T){console.log("Error while reading CSS rules from "+_.href,T.toString())}}),p}function b(y){return{resolve:function(){var _=(y.parentStyleSheet||{}).href;return s.inlineAll(y.cssText,_)},src:function(){return y.style.getPropertyValue("src")}}}}}function x(){return{inlineAll:a,impl:{newImage:t}};function t(l){return{inline:m};function m(b){return r.isDataUrl(l.src)?Promise.resolve():Promise.resolve(l.src).then(b||r.getAndEncode).then(function(y){return r.dataAsUrl(y,r.mimeType(l.src))}).then(function(y){return new Promise(function(p,_){l.onload=p,l.onerror=_,l.src=y})})}}function a(l){if(!(l instanceof Element))return Promise.resolve(l);return m(l).then(function(){return l instanceof HTMLImageElement?t(l).inline():Promise.all(r.asArray(l.childNodes).map(function(b){return a(b)}))});function m(b){var y=b.style.getPropertyValue("background");return y?s.inlineAll(y).then(function(p){b.style.setProperty("background",p,b.style.getPropertyPriority("background"))}).then(function(){return b}):Promise.resolve(b)}}}})()})(Oe);const en=Oe.exports;function Pe(e,n,r){const s=e.slice();return s[9]=n[r],s}function Se(e,n,r){const s=e.slice();return s[12]=n[r],s}function Ce(e){let n,r,s,i;function g(){return e[6](e[12],e[9])}function v(){return e[7](e[12],e[9])}return{c(){n=O("img"),se(n.src,r="./img/"+e[9]+"/"+e[12].url)||P(n,"src",r),P(n,"alt",e[12].name),P(n,"class","emoji svelte-181mxs6"),P(n,"title",e[12].name)},m(f,h){j(f,n,h),s||(i=[de(n,"click",g),de(n,"keypress",v)],s=!0)},p(f,h){e=f},d(f){f&&G(n),s=!1,ie(i)}}}function xe(e){let n,r=e[9]+"",s,i,g,v,f=Q[e[9]],h=[];for(let o=0;o<f.length;o+=1)h[o]=Ce(Se(e,f,o));return{c(){n=O("div"),s=Ae(r),i=J(),g=O("div");for(let o=0;o<h.length;o+=1)h[o].c();v=J(),P(n,"class","emoji-title svelte-181mxs6"),P(g,"class","emoji-container svelte-181mxs6")},m(o,C){j(o,n,C),M(n,s),j(o,i,C),j(o,g,C);for(let c=0;c<h.length;c+=1)h[c].m(g,null);M(g,v)},p(o,C){if(C&8){f=Q[o[9]];let c;for(c=0;c<f.length;c+=1){const F=Se(o,f,c);h[c]?h[c].p(F,C):(h[c]=Ce(F),h[c].c(),h[c].m(g,v))}for(;c<h.length;c+=1)h[c].d(1);h.length=f.length}},d(o){o&&G(n),o&&G(i),o&&G(g),We(h,o)}}}function nn(e){let n,r,s,i,g,v,f,h,o,C,c,F,L,W,ee,X,ne,q,re,oe,V=Object.keys(Q),x=[];for(let t=0;t<V.length;t+=1)x[t]=xe(Pe(e,V,t));return{c(){n=O("video"),s=J(),i=O("div"),g=O("div"),v=O("div"),f=J(),h=O("div"),o=J(),C=O("div"),c=J(),F=O("img"),ee=J(),X=O("div");for(let t=0;t<x.length;t+=1)x[t].c();ne=J(),q=O("button"),q.textContent="\u0421\u041E\u0425\u0420\u0410\u041D\u0418\u0422\u042C",se(n.src,r="./img/bg.webm")||P(n,"src",r),P(n,"class","bg svelte-181mxs6"),P(n,"no-controls",""),n.autoplay=!0,n.loop=!0,n.playsInline=!0,n.muted=!0,P(v,"class","stick-shadow svelte-181mxs6"),P(h,"class","stick svelte-181mxs6"),P(C,"class","stick-shadow svelte-181mxs6"),P(F,"class","current svelte-181mxs6"),se(F.src,L="./img/"+e[1].category+"/"+e[1].url)||P(F,"src",L),P(F,"alt",W=e[1].name),P(g,"class","ctx svelte-181mxs6"),P(X,"class","emojis svelte-181mxs6"),P(i,"class","container svelte-181mxs6"),fe(i,"height",e[2]*100+"px"),fe(i,"width","100vw"),P(q,"class","svelte-181mxs6")},m(t,a){j(t,n,a),j(t,s,a),j(t,i,a),M(i,g),M(g,v),M(g,f),M(g,h),M(g,o),M(g,C),M(g,c),M(g,F),e[5](g),M(i,ee),M(i,X);for(let l=0;l<x.length;l+=1)x[l].m(X,null);j(t,ne,a),j(t,q,a),re||(oe=de(q,"click",e[4]),re=!0)},p(t,[a]){if(a&2&&!se(F.src,L="./img/"+t[1].category+"/"+t[1].url)&&P(F,"src",L),a&2&&W!==(W=t[1].name)&&P(F,"alt",W),a&8){V=Object.keys(Q);let l;for(l=0;l<V.length;l+=1){const m=Pe(t,V,l);x[l]?x[l].p(m,a):(x[l]=xe(m),x[l].c(),x[l].m(X,null))}for(;l<x.length;l+=1)x[l].d(1);x.length=V.length}a&4&&fe(i,"height",t[2]*100+"px")},i:z,o:z,d(t){t&&G(n),t&&G(s),t&&G(i),e[5](null),We(x,t),t&&G(ne),t&&G(q),re=!1,oe()}}}function rn(e,n,r){let s;$e(e,_e,c=>r(2,s=c));let i;_e.set(window.innerHeight*.01),window.addEventListener("resize",function(c){_e.set(window.innerHeight*.01)},!0);let g={name:"clown_face",category:"smiles",url:"Clown Face.png"};Object.keys(Q).forEach(c=>console.log(c,Q[c]));function v(c,F,L){r(1,g={name:c,category:L,url:F})}function f(){en.toJpeg(i,{quality:.95}).then(function(c){var F=document.createElement("a");F.download=`stickman_${g.name}.jpeg`,F.href=c,F.click()})}function h(c){ye[c?"unshift":"push"](()=>{i=c,r(0,i)})}return[i,g,s,v,f,h,(c,F)=>v(c.name,c.url,F),(c,F)=>v(c.name,c.url,F)]}class tn extends Ke{constructor(n){super(),Ve(this,n,rn,nn,Te,{})}}new tn({target:document.getElementById("app")});
