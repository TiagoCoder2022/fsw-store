const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageUrl:
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241202/fsw-store/04_mx-master-3s_aaonuf.webp",
      },
    });

    const mouses = [
      {
        name: "Delux M800 Pro Black",
        slug: "delux-m800-pro-black",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706387890/fsw-store/01-delux-m800-black_cjojwo.png",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706387891/fsw-store/02-delux-m800-black_z7cnbm.png",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706387891/fsw-store/04-delux-m800-black_fluvgv.png",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706387891/fsw-store/03-delux-m800-black_fgniso.png",
        ],
        basePrice: 317,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Delux M800 Pro White",
        slug: "delux-m800-pro-white",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706387665/fsw-store/delux-m800-pro-white-01_i4vozq.png",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706387665/fsw-store/delux-m800-pro-white-02_aldvlr.png",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706387665/fsw-store/delux-m800-pro-white-03_nsmpr2.png",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706387665/fsw-store/delux-m800-pro-white-04_cclt1u.png",
        ],
        basePrice: 464,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241202/01_mx-master-3s_re3w7n.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241202/02_mx-master-3s_z7zoqo.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241202/03_mx-master-3s_nn1flw.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241202/04_mx-master-3s_aaonuf.webp",
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241255/fsw-store/01_logi-superlight_dd9yeh.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241256/fsw-store/02_logi-superlight_urphov.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241256/fsw-store/03_logi-superlight_e9aseq.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241256/fsw-store/04_logi-superlight_zuxchp.webp",
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241077/fsw-store/01_logi-lightspeed_fzjekt.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241077/fsw-store/02_logi-lightspeed_ozf8sw.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241077/fsw-store/03_logi-lightspeed_xfxbtd.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241077/fsw-store/04_logi-lightspeed_sa3ptd.webp",
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Hyperx Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241141/fsw-store/01_hyperx-dart_brlo1g.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241141/fsw-store/02_hyperx-dart_rguahe.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241141/fsw-store/03_hyperx-dart_skuuky.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241141/fsw-store/04_hyperx-dart_d8m560.webp",
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Razer Deathadder V2 Pro",
        slug: "razer-deathadder-v2-pro",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241202/fsw-store/01_razer-deathadder_mie8fq.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241202/fsw-store/02_razer-deathadder_uqnbxv.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241202/fsw-store/03_razer-deathadder_eb51ol.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706241203/fsw-store/04_razer-deathadder_fa184u.webp",
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imageUrl:
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243413/fsw-store/03_epomaker-th80_h4osgx.webp",
      },
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1701550673/fsw-store/ilmidpgvpldv2nhir9tl.png",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1701550673/fsw-store/jbvxjt09nx5oegzjgtd3.png",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1701550673/fsw-store/k37c18t92aghc2dqylux.png",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1701550672/fsw-store/ppe8dycil1w3ftegnfz6.png",
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech MX Keys S",
        slug: "logitech-mx-keys-s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243484/fsw-store/01_logi-mx-keys-s_ryutop.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243487/fsw-store/02_logi-mx-keys-s_ldpi5s.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243491/fsw-store/03_logi-mx-keys-s_vlpsza.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243494/fsw-store/04_logi-mx-keys-s_w75kxj.webp",
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243439/fsw-store/01_logi-pop-keys_zu1ema.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243442/fsw-store/02_logi-pop-keys_cr5dcz.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243445/fsw-store/03_logi-pop-keys_jxpq5w.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243448/fsw-store/04_logi-pop-keys_p1lh1g.webp",
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243527/fsw-store/01_logi-mx-mechanical_ib9058.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243530/fsw-store/02_logi-mx-mechanical_xoeczx.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243533/fsw-store/03_logi-mx-mechanical_cswywj.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243536/fsw-store/04_logi-mx-mechanical_arqb83.webp",
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243408/fsw-store/01_epomaker-th80_lwy6fc.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243410/fsw-store/02_epomaker-th80_wpjm72.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243413/fsw-store/03_epomaker-th80_h4osgx.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243416/fsw-store/04_epomaker-th80_azrwna.webp",
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243568/fsw-store/01_redragon-gamer-ashe_ccmqy8.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243571/fsw-store/02_redragon-gamer-ashe_ahjhct.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243574/fsw-store/03_redragon-gamer-ashe_ue1szd.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706243577/fsw-store/04_redragon-gamer-ashe_faizgo.webp",
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "headphones",
        imageUrl:
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244712/fsw-store/01_hyperx-stinger_rmcv8i.webp",
      },
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244654/fsw-store/01_logi-vibe_km6z4l.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244657/fsw-store/02_logi-vibe_sun8vo.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244660/fsw-store/03_logi-vibe_cj6rhz.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244663/fsw-store/04_logi-vibe_bphjos.webp",
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244806/fsw-store/01_logi-lightspeed-phone_yeeot1.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244809/fsw-store/02_logi-lightspeed-phone_v8xewm.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244813/fsw-store/03_logi-lightspeed-phone_xiz84j.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244817/fsw-store/04_logi-lightspeed-phone_xsqenn.webp",
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244604/fsw-store/01_logi-astro-a30_wa5b8o.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244606/fsw-store/02_logi-astro-a30_q7mb4t.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244609/fsw-store/03_logi-astro-a30_lt4tq3.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244612/fsw-store/04_logi-astro-a30_dyjli0.webp",
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244749/fsw-store/01_logi-earbuds_jszpif.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244753/fsw-store/02_logi-earbuds_swzhsx.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244756/fsw-store/03_logi-earbuds_cnjpm8.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244759/fsw-store/04_logi-earbuds_p0m2nx.webp",
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244712/fsw-store/01_hyperx-stinger_rmcv8i.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244715/fsw-store/02_hyperx-stinger_kas2jp.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244718/fsw-store/03_hyperx-stinger_qlmk6x.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244721/fsw-store/04_hyperx-stinger_k5ethk.webp",
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244862/fsw-store/01_razer-kraken_ptcuac.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244866/fsw-store/02_razer-kraken_ag3fah.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244869/fsw-store/03_razer-kraken_uj7bfl.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706244873/fsw-store/04_razer-kraken_emqp0f.webp",
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imageUrl:
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278295/fsw-store/01_logi-studio-series_jhutys.webp",
      },
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278337/fsw-store/01_logi-powerplay_r6to97.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278341/fsw-store/02_logi-powerplay_i0ype6.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278345/fsw-store/03_logi-powerplay_czvu8d.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278350/fsw-store/04_logi-powerplay_bqqii7.webp",
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Desk Mat",
        slug: "logitech-desk-mat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278223/fsw-store/01_logi-desk-mat_nryipx.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278227/fsw-store/02_logi-desk-mat_swzebq.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278231/fsw-store/03_logi-desk-mat_xsjo5e.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278236/fsw-store/04_logi-desk-mat_e9ibfr.webp",
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Logitech G740",
        slug: "logitech-g740",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278435/fsw-store/01_logi-g740_kic1yr.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278457/fsw-store/02_logi-g740_e5wyfp.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278462/fsw-store/03_logi-g740_jp2kbw.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278466/fsw-store/04_logi-g740_q8baw2.webp",
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Mousepad Studio Series",
        slug: "logitech-mousepad-studio-series",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278295/fsw-store/01_logi-studio-series_jhutys.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278300/fsw-store/02_logi-studio-series_fljjgm.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278304/fsw-store/03_logi-studio-series_wwyrvd.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278308/fsw-store/04_logi-studio-series_kjgfug.webp",
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Force One Skyhawk Dark",
        slug: "force-one-skyhawk-dark",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278150/fsw-store/01_force-dark_rxw4qg.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278154/fsw-store/02_force-dark_wz7986.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278159/fsw-store/03_force-dark_nknwvp.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278163/fsw-store/04_force-dark_bgsleg.webp",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Force One Skyhawk Snow",
        slug: "force-one-skyhawk-snow",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278188/fsw-store/01_force-snow_srrg9h.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278192/fsw-store/02_force-snow_nwnbil.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278196/fsw-store/03_force-snow_ri4a6l.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706278200/fsw-store/04_force-snow_ovsfbq.webp",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
        imageUrl:
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706277240/fsw-store/04_dell-S3222DGM_t8yzjr.webp",
      },
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706277046/fsw-store/01_dell-S2421HN_d7cyse.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706277049/fsw-store/02_dell-S2421HN_ml6slt.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706277053/fsw-store/03_dell-S2421HN_twl7aq.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706277057/fsw-store/04_dell-S2421HN_gidwyi.webp",
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Dell P2422H",
        slug: "dell-p2422h",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706276893/fsw-store/01_dell-P2422H_wyvhc2.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706276897/fsw-store/02_dell-P2422H_ha0ssd.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706276901/fsw-store/03_dell-P2422H_mchmw8.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706276904/fsw-store/04_dell-P2422H_mnsmvr.webp",
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Dell P2723QE",
        slug: "dell-p2723qe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706276969/fsw-store/01_dell-P2723QE_wk2jbq.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706276973/fsw-store/02_dell-P2723QE_bt1yjs.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706276977/fsw-store/03_dell-P2723QE_lryjxt.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706276981/fsw-store/04_dell-P2723QE_v0rc6f.webp",
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3422DWG",
        slug: "dell-s3422dwg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706277163/fsw-store/01_dell-S3422DWG_gvndek.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706277168/fsw-store/02_dell-S3422DWG_ktkhty.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706277172/fsw-store/03_dell-S3422DWG_duvszf.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706277176/fsw-store/04_dell-S3422DWG_rxrcjm.webp",
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3222DGM",
        slug: "dell-s3222dgm",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706277205/fsw-store/01_dell-S3222DGM_izdq11.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706277232/fsw-store/02_dell-S3222DGM_xvqzeh.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706277236/fsw-store/03_dell-S3222DGM_lawd6m.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706277240/fsw-store/04_dell-S3222DGM_t8yzjr.webp",
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell AW2524HF",
        slug: "dell-aw2524hf",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706276844/fsw-store/01_dell-AW2524HF_b6f06t.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706276845/fsw-store/02_dell-AW2524HF_qeovn1.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706276850/fsw-store/03_dell-AW2524HF_g4drbs.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706276854/fsw-store/04_dell-AW2524HF_ff7pdj.webp",
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imageUrl:
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706279923/fsw-store/01_logi-surround-z607_vfeq70.webp",
      },
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706279923/fsw-store/01_logi-surround-z607_vfeq70.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706279928/fsw-store/02_logi-surround-z607_xffhdg.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706279928/fsw-store/02_logi-surround-z607_xffhdg.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706279937/fsw-store/04_logi-surround-z607_ns56sl.webp",
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Dock",
        slug: "logitech-dock",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706282255/fsw-store/01_logi-dock_pyty8b.png",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706282252/fsw-store/02_logi-dock_c8lana.png",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706282246/fsw-store/03_logi-dock_zyzocy.png",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706282242/fsw-store/04_logi-dock_iax7gi.png",
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Sony SA-Z9R Speakers",
        slug: "sony-sa-z9r-speakers",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706280096/fsw-store/01_sony-SA-Z9R_rrqtzl.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706280101/fsw-store/02_sony-SA-Z9R_g8i3sw.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706280105/fsw-store/03_sony-SA-Z9R_dyeyeg.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706280110/fsw-store/04_sony-SA-Z9R_gq14xn.webp",
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Sony XB43 Extra Bass",
        slug: "sony-xb43-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706279976/fsw-store/01_sony-extra-bass_uifgt9.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706279980/fsw-store/02_sony-extra-bass_d5p56x.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706279985/fsw-store/03_sony-extra-bass_mb1fmy.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706279989/fsw-store/04_sony-extra-bass_rvp5ut.webp",
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony XB23 Extra Bass",
        slug: "sony-xb23-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706280156/fsw-store/01_sony-XB23_opnwfv.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706280160/fsw-store/02_sony-XB23_tf1gtk.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706280165/fsw-store/03_sony-XB23_styywa.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706280170/fsw-store/04_sony-XB23_axnavn.webp",
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony HT-S200F Soundbar",
        slug: "sony-ht-s200f-soundbar",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706280029/fsw-store/01_sony-S200F_hoddpn.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706280033/fsw-store/02_sony-S200F_qm5z4i.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706280038/fsw-store/03_sony-S200F_o5yao4.webp",
          "https://res.cloudinary.com/dxzickkey/image/upload/v1706280043/fsw-store/04_sony-S200F_tzxwo8.webp",
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
