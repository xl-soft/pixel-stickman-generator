<script>
    import { vh } from './scripts/vh'
    import emojis from './img/emojis.json'
    import domtoimage from 'dom-to-image'
    import * as imports from './img/imports'
    let context
    vh.set(window.innerHeight * 0.01)
    window.addEventListener('resize', function(event) {
        vh.set(window.innerHeight * 0.01)
    }, true);

    let current = {
        name: 'clown_face',
        category: 'smiles',
        url: 'Clown Face.png'
    }
    let categories = []
    Object.keys(emojis).forEach( key => console.log(key, emojis[key]))
    function set(name, url, category) {
        current = {
            name: name,
            category: category,
            url: url
        }
    }
    function download() {
        domtoimage.toPng(context, { quality: 0.95 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = `stickman_${current.name}.png`;
            link.href = dataUrl;
            link.click();
        });
    }
</script>
<video style src="./img/bg.webm" class="bg" no-controls autoplay loop playsinline muted/>
<div class="container" style="height: {$vh * 100}px; width: 100vw;">
    <div class="ctx" bind:this={context}>
        <div class="stick-shadow"></div>
        <div class="stick"></div>
        <div class="stick-shadow"></div>
        <img class="current" src="./img/{current.category}/{current.url}" alt="{current.name}"/>
    </div>
    <div class="emojis">
        {#each Object.keys(emojis) as category}
            <div class="emoji-title">{category}</div>
            <div class="emoji-container">
                {#each emojis[category] as item}
                    <img src="./img/{category}/{item.url}" alt="{item.name}" class="emoji" title="{item.name}" on:click={() => set(item.name, item.url, category)} on:keypress={() => set(item.name, item.url, category)}>
                {/each}
            </div>
        {/each}
    </div>
</div>

<button on:click={download}>СОХРАНИТЬ</button>


<style>
    video {
        position: absolute;
        top: -10%;
        left: -10%;
        width: 120%;
        height: 120%;
        object-fit: fill; 
        filter: blur(1rem); 
        z-index: -5;
    }
    .stick {
        width: 2.14%;
        height: 50%;
        background-color: black;
        top: 0%;
    }

    .stick-shadow {
        width: 2.14%;
        height: 50%;
        background-color: black;
        opacity: .4;
    }

    .current {
        width: 60%;
        aspect-ratio: 1 / 1;
        image-rendering: pixelated;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .emoji-title {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
        font-weight: 900;
    }

    .emoji-container {
        width: 100%;
    }
    button {
        width: 300px;
        height: 40px;
        position: absolute;
        bottom: 30px; right: 50%;
        transform: translate(50%,-50%);
        z-index: 15;
    }
    .ctx {
        height: 700px;
        aspect-ratio: 1 / 1;
        background-color: white;
        overflow: hidden;
        box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.5);
        image-rendering: pixelated;
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: flex-end;
        align-content: center;
        position: relative;
    }
    .emoji:hover {
        opacity: .5;
        transition: .4s;
    }

    .emoji {
        width: 25px;
        height: 25px;
        margin: 5px;
        transition: .4s;
        cursor: pointer;
    }
    .emojis {
        width: 500px;
        height: 700px;
        background-color: white;
        border-radius: 15px;
        box-sizing: border-box;
        padding: 15px;
        overflow: scroll;
        box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        align-content: stretch;
    }

    :global(body) {
        margin: 0;
        overflow: hidden;
    }
    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: stretch;
        background-size: cover;
        gap: 15px
    }

    @media screen and (orientation: portrait) {
        .ctx {
            height: 40%;
        }
        .emojis {
            width: 80%;
            height: 40%;

        }
        .container {
            flex-direction: column;
        }
    }
</style>