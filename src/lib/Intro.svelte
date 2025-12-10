<script>
    import Dialog from "./Dialog.svelte";
    import {fly} from 'svelte/transition'

    import {onMount, onDestroy} from 'svelte'

    export let index, next =false

    let visible = false

    let text = [
        {
        t:"Anda adalah konglomerat dari sebuah negara adikuasa.",
        },
        {
        t:"Saat berkunjung ke Indonesia, Anda mendapat undangan makan malam di rumah seorang pejabat. Dia kenalan lama Anda, punya pengaruh besar dan koneksi luas di pemerintahan.",
        },
        {
        t:"Saat makan malam, kenalan Anda bertanya,",
        },
        {
        t:"Kamu tidak tertarik investasi di PSN?",
        },
        {
        t:"Anda balik bertanya", 
        },
        {
        t:"“Apa itu PSN?”",
        }
    ]

    let text2 = [
        {
        t:"Kenalan Anda menjelaskan",
        },
        {
        t:"PSN adalah Proyek Strategis Nasional",
        },
        {
            t:"PSN ini warisan rezim Joko Widodo. Selama 10 tahun pemerintahannya, Jokowi mengutak-atik banyak aturan biar proyek-proyek berlabel PSN bisa berjalan bebas hambatan. Pokoknya, pemerintah siap mengerahkan seluruh aparatur negara untuk mendukung proyekmu!"
        }, 
        {
            t:"Sekarang, Presiden Prabowo Subianto melanjutkan skema PSN. Per September 2025, sudah ada 250 proyek dan program di daftar PSN."
        },
        {
            t:"Tertarik, Anda bertanya lagi,"
        },
        {
            t:"Bagaimana caranya saya punya PSN?"
        }
    ]

    let text3 = [
        {
        t:"Anda mulai yakin berinvestasi di PSN. Namun, masih ada yang mengganjal.",
        },
        {
        t:"Anda teringat pernah membaca berita soal bagaimana PSN di Indonesia telah memicu kerusakan lingkungan, konflik lahan, dan pelanggaran HAM.",
        },
        {
        t:"Anda tanya pendapat kenalan Anda, yang segera membalas,",
        },
        {
        t:"Gampang"
        }
    ]

    function typewriter(node, { speed = 1, delay = 0, end = false}) {
        console.log(node.nodeType)
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		// if (!valid) {
		// 	throw new Error(`This transition only works on elements with a single text node child`);
		// }

		const text = node.textContent
		const duration = text.length / (speed * 0.1)
		
		return {
            delay,
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t)
				node.textContent = text.slice(0,i)
                // if (i < text.length) {
                //     next = false
                // } else if (i == text.length) {
                //     console.log("text ended")
                //     console.log(end)
                //     if (end == true) {
                //         next = true
                //     }
                // }
			}
		};
	}


    $: if (index) {
        next = false
        visible = false
        setTimeout(() => {
            visible = true
        }, 100)
    }

    let d = 20

</script>
<section>
    {#if index == 1}
        {#if visible}
        <p in:typewriter>{text[0].t}</p>
        <p in:typewriter={{delay:text[0].t.length * d}}>{text[1].t}</p>
        <p in:typewriter={{delay:(text[0].t.length + text[1].t.length) * d}}>{text[2].t}</p>

        <div class="dialog-container left">
            <p class="dialog" in:fly={{x:-100, delay:(text[0].t.length + text[1].t.length + text[2].t.length) * d}}>{text[3].t}</p>
        </div>


        <p in:typewriter={{delay:(text[0].t.length + text[1].t.length + text[2].t.length + text[3].t.length) * d}}>{text[4].t}</p>

        <div class="dialog-container right">
            <p class="dialog" 
            in:fly={{x:500, delay:(text[0].t.length + text[1].t.length + text[2].t.length + text[3].t.length + text[4].t.length) * d}}
            on:introend={() => {setTimeout(() => {next = true}, 500)}}>{text[5].t}</p>
        </div>

        {/if}
        {#if next}
        <button on:click={() => {index++}}>LANJUT</button>
        {/if}

    {:else if index == 2}
        {#if visible}
            <p in:typewriter>{text2[0].t}</p>
            <div class="dialog-container left">
                <p  class="dialog"in:fly={{delay:text2[0].t.length * d}}>{text2[1].t}</p>
            </div>
            <div class="dialog-container left">
                <p class="dialog" in:fly={{delay:(text2[0].t.length + 100) * d}}>{text2[2].t}</p>
            </div>
            <div class="dialog-container left">
                <p class="dialog" in:fly={{x:-100, delay:(text2[0].t.length + 200) * d}}>{text2[3].t}</p>
            </div>


            <p in:typewriter={{delay:(text2[0].t.length + 300) * d}}>{text2[4].t}</p>

            <div class="dialog-container right">
                <p class="dialog" in:fly={{x:500, end:true, delay:(text2[0].t.length + 300 + text2[4].t.length) * d}}
                on:introend={() => {setTimeout(() => {next = true}, 500)}}>{text2[5].t}</p>
            </div>

        {/if}

        {#if next}
        <button on:click={() => {index++}}>LANJUT</button>
        {/if}
        

    {:else if index == 12}
        {#if visible}
            <p in:typewriter>{text3[0].t}</p>
            <p in:typewriter={{delay:text3[0].t.length * d}}>{text3[1].t}</p>
            <p in:typewriter={{delay:(text3[0].t.length + text3[1].t.length) * d}}>{text3[2].t}</p>

            <div class="dialog-container left">
                <p class="dialog" in:fly={{x:-100, delay:(text3[0].t.length + text3[1].t.length + text3[2].t.length) * d}}
                on:introend={() => {setTimeout(() => {next = true}, 500)}}>{text3[3].t}</p>
            </div>      
        {/if}

        {#if next}
        <button on:click={() => {index++}}>LANJUT</button>
        {/if}

    {/if}

    
    <Dialog bind:index/>
</section>

<style>
    section {
        margin-top:2rem;
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: lightyellow;
        overflow: hidden;
    }
    p {
        font-family: "Noto Sans", sans-serif;
        width:90%;
        color:black;
        font-size: 0.9rem;
    }
    button {
        margin-top:1rem;
        font-family: "Atma", sans-serif;
        font-size:1.5rem;
        background-color:#fdf10f;
        border-radius: 1rem;
        padding-left: 1rem;
        padding-right:1rem;
        border: black solid 3px;
        font-weight:500;
    }
    .dialog-container {
        display: flex;
        width: 90% ;
    }
    .right {
        text-align: right;
        justify-content: flex-end;
    }
    .dialog {
        transition: all 400ms ease-in-out;
        padding: 0.5rem;
        background-color: #FDF10F;
        border-radius: 0.5rem;
        box-shadow: 2px 2px 0 #089f5e;
        width: 50%;
    }
    .left .dialog {
        background-color: #fcf8b9;
    }   
    @media only screen and (max-width: 400px) {
        p {
            font-size: 0.8rem;
            margin-top:0;
        }
        .dialog {
            width:80%;
        }
    }
    
</style>