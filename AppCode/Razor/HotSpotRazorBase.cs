using AppCode.Data;
namespace AppCode.Razor
{
  public abstract class HotSpotRazorBase : Custom.Hybrid.RazorTyped
  {
    /// <summary>
    /// App Resources (typed)
    /// </summary>
    protected AppResources AppRes => _appResources ??= As<AppResources>(App.Resources);
    private AppResources _appResources;

    /// <summary>
    /// App Settings (typed)
    /// </summary>
    protected AppSettings AppSet => _appSettings ??= As<AppSettings>(App.Settings);
    private AppSettings _appSettings;
    
  }
}