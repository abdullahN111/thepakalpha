import TileGrout from "../.././public/images/products/tile_grout.png";
import TileBond from "../.././public/images/products/tile_bond.png";
import WallPutty from "../.././public/images/products/wall_putty.png";

const instructionTitles = [
  "Surface Preparation",
  "Mixing",
  "Application",
  "Curing",
  "Uses",
];
const instructionDescTileGrout = [
  `Tiles must be firmly attached to a sound
    subsurface and tile adhesive must be
    cured a minimum 24 hours prior to
    grout application. Remove any loose
    material or dust from tiles and joints.`,
  `Dry-blend powder before use. Stir tile grout
   into clean water. Power mixes at less than
   300 RPM until you get a stiff creamy
   consistency. Use approximately 4 parts
   grout to 1 part water by volume (2 – 3) liters
   per 10 kg bag. Avoid thinning at this will
   weaken the grout.pot life of mixed grout is
   approximately 2 hours.`,
  `Lightly damped tile with clean water before grouting. This
   makes grouting easier and the finished tile clear, highly
   pours tile will require additional wetting of the joints to
   prevent excessive water loss from the grout. Float held at
   approximately 45 angles, work diagonally to joints using
   adequate pressure to ensure that grout bonds to
   subsurface and fills in joints. Remove as much excess
   grout possible from the surface of the tiles with edge of
   the rubber grout float. Allow grout to set-up approximately
   10 to 20 minutes in joint. Soak sponge or cheese cloth
   water. Rinse out excess water completely and wipe tiles
   clean using a circular motion. Rinse sponge and rinse out
   frequently and keep water supply clean. Joints should
   become smooth and level with edges of tile. Allow
   installation to dry for approximately 30 to 45 minutes or
   until a haze forms on tile and the grout in the joints sets
   firm. Use a soft, and clean dry cloth polish off haze and dry
   remaining grout residue.`,
  `Proper curing is necessary for grout to achieve maximum
   strength. After final soft cloth polishing, wait 2 to 4 hours,
   the lightly dampen installation with clean, cool water and
   cover entire surface for a minimum 3 days with Kraft tape
   paper with edges lapped. If this is impractical, lightly mist
   grout several times a day for 3 days.`,
  `Tile Grout is suitable for use in
   areas ranging from residential to
   heavy commercial. Maybe used
   with all type of tile, ceramic,
   marble, slat, limestone and granite.
   It is suitable for use in commercial
   kitchens, food processing plants
   and residential floors, wall,
   swimming pools, shower and
   countertops.`,
];

const instructionDescTileBond = [
  `The surface must be clean, dry, and free
   from dust, grease, or loose particles.
   Tiles should be properly set and cured
   for at least 24 hours before applying Tile
   Bond.`,
  `Dry-mix powder before use. Add Tile Bond
   to clean water and mix at low speed (less
   than 300 RPM) until a smooth, lump-free
   paste forms. Use approximately 3–4 parts
   powder to 1 part water by volume (2–3
   liters per 10 kg bag). Avoid excess water, as
   it weakens the bond. Pot life of mixed Tile
   Bond is around 2 hours
  .`,
  `Apply Tile Bond to the prepared surface using a notched
   trowel. Spread evenly while holding the trowel at a 45
  degree angle to ensure proper adhesion. Press tiles firmly
   into place, slightly twisting them to ensure full contact with
   the adhesive. Remove excess adhesive from joints before
   it dries. Allow the tiles to set for 10 to 20 minutes, then clean
   the surface with a damp sponge, rinsing frequently to
   keep water clean. Let the installation dry for 30 to 45
   minutes. Once a haze forms, polish with a soft, dry cloth to
   remove any residue.`,
  `Proper curing is essential for Tile Bond to reach full
   strength. After the final cleaning, allow the installation to
   set for 2 to 4 hours. Then, lightly mist the surface with clean
   water and cover it with Kraft paper for at least 3 days. If
   covering is not possible, mist the bonded tiles several
   times a day for 3 days to ensure proper curing.`,
  `Tile Bond is ideal for both
   residential and heavy commercial
   applications. It works effectively
   with various tile types, including
   ceramic, marble, slate, limestone,
   and granite. Suitable for use in
   commercial kitchens, food
   processing plants, and residential
   spaces, it ensures strong adhesion
   for floors, walls, swimming pools,
   showers, and countertops.`,
];

const instructionDescWallPutty = [
  `The surface must be clean, dry, and free
   from dust, grease, or loose particles. Any
   cracks or holes should be filled and
   leveled before applying Wall Putty.
   Ensure the wall is properly cured and
   free from moisture for the best results.`,
  `Dry-mix powder before use. Add Wall Putty
   to clean water and mix at low speed (less
   than 300 RPM) until a smooth, lump-free
   paste forms. Use approximately 2–3 parts
   powder to 1 part water by volume (2–3
   liters per 10 kg bag). Avoid excess water, as
   it weakens the strength. Pot life of mixed
   Wall Putty is around 2 hours.`,
  `Apply Wall Putty to the prepared surface using a putty
   knife or trowel, holding it at a slight angle for smooth
   application. Spread evenly in thin layers, covering the
   entire surface without leaving gaps or ridges. Allow the
   first coat to dry for 3 to 4 hours before applying a second
   coat if required. For best results, apply the second coat in
   the opposite direction of the first to ensure even coverage.
   Once fully dry, use fine-grit sandpaper to smooth the
   surface, removing any imperfections. Wipe off dust with a
   clean, dry cloth before proceeding with painting or further
   finishing.`,
  ` Proper curing is essential for Wall Putty to achieve
   maximum strength. After the final coat has dried, allow it
   to set for 24 hours before sanding or painting. Lightly mist
   the surface with clean water if needed to prevent rapid
   drying, especially in hot or dry conditions. For best results,
   let the putty cure naturally for at least 3 days before
   applying paint or finishing coats.`,
  `Wall Putty is suitable for use in
   both residential and commercial
   spaces. It can be applied on
   various surfaces, including
   concrete, plaster, and drywall. Ideal
   for interior and exterior walls, it
   provides a smooth finish for
   painting. It is suitable for homes,
   offices, commercial buildings, and
   industrial projects, ensuring
   durability and a flawless surface.`,
];

export const productsData = [
  {
    id: 1,
    title: "Tile Grout",
    description: `A high-quality, durable solution to fill gaps between tiles, ensuring a seamless, long-lasting finish. Our grout resists cracks, stains, and moisture, ideal for residential and commercial spaces.`,
    advantage:
      "This high-performance tile grout enhances the natural color of tiles while offering exceptional resistance to cracks, shrinkage, and chemical damage. Designed for long-lasting durability, it forms strong, waterproof joints—making it ideal for pools, bathrooms, and other damp areas. The grout features a smooth texture for easy application and comes in a pre-mixed powder form—just add water. Available in a variety of color options, it provides a seamless finish that won’t fade or discolor over time.",
    image: TileGrout,
    titles: instructionTitles,
    content: instructionDescTileGrout,
    tagline:
      "Fills gaps seamlessly, resists cracks, moisture, and discoloration perfectly.",
    slug: "tile-grout",
  },
  {
    id: 2,
    title: "Tile Bond",
    description: `A strong, reliable adhesive designed to secure tiles firmly in place. Our high-performance tile bond ensures excellent grip, durability, and moisture resistance, preventing displacement over time.`,
    advantage:
      "This tile bond delivers a strong and lasting hold, preventing cracks and shrinkage over time. It’s highly resistant to water, moisture, chemicals, and stains, making it perfect for pools and other wet areas. The smooth texture allows for easy application on various surfaces. Pre-mixed for convenience—just add water—and available in multiple colors to match your design needs.",
    image: TileBond,
    titles: instructionTitles,
    content: instructionDescTileBond,
    tagline:
      "Strong tile adhesive that withstands moisture, cracks, and chemicals easily.",
    slug: "tile-bond",
  },
  {
    id: 3,
    title: "Wall Putty",
    description: `A smooth, durable base for flawless walls! Our high-quality wall putty fills cracks, evens rough surfaces, and provides a strong, moisture-resistant layer that protects from peeling and dampness.`,
    advantage:
      "This premium wall putty provides a smooth, flawless finish while preventing cracks and flaking. It’s moisture-resistant and enhances the durability of paint on both interior and exterior walls. Easy to apply and sand, it ensures strong adhesion to various surfaces. Conveniently pre-mixed—just add water for quick and efficient use.",
    image: WallPutty,
    titles: instructionTitles,
    content: instructionDescWallPutty,
    tagline:
      "Smoothens walls, prevents cracks, resists moisture, enhances paint durability.",
    slug: "wall-putty",
  },
];
