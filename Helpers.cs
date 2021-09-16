using ToSic.Razor.Blade;

public class Helpers: Custom.Hybrid.Code12
{
  // returns required attributes for editing mode if needed
  public dynamic EditAttr(int moduleId, dynamic data, dynamic settings) {
    if(!Edit.Enabled) return null;
    return "data-module-id='" + moduleId
      + "' data-entity-id='" + data.EntityId
      + "' data-guid='" + data.EntityGuid
      + "' data-iconoffset-x='" + settings.HotspotSetting.HotspotOffsetX
      + "' data-iconoffset-y='" + settings.HotspotSetting.HotspotOffsetY + "'"; 
  }

  public dynamic MarkerStyles(dynamic hotspot, dynamic settings) {
    return "top: " + hotspot.Y.ToString() + "%;" 
      + " left: " + hotspot.X.ToString().Replace(",",".") + "%;" 
      + " width: " + settings.HotspotSetting.HotspotWidth + ";"
      + " height: " + settings.HotspotSetting.HotspotHeight;
  }
}
